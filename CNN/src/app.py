from flask import Flask, request
from flask_cors import CORS
from keras.models import load_model
from cnn_model.custom_objects import layers
from cnn_model.custom_objects import metrics
import json
from preprocess import prepare_image
import sys
import numpy as np
import keras
import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator

app = Flask(__name__)
CORS(app)
model = None


def load_cnn_model():
	global model
	model = load_model('./cnn_model/deepaesthetics_model.h5', \
	    custom_objects = {
			'LRN': layers.LRN,
			'euclidean_distance_loss': metrics.euclidean_distance_loss,
			'rmse': metrics.rmse
		})
	model.summary()
	print('[*] Model loaded')
	global graph
	graph = tf.get_default_graph()

@app.route('/')
def index():
	return "Flask server"

@app.route('/run_cnn', methods = ['POST'])
def postdata():
	data = request.get_json()

	imagePath = data.get('imagePath')

	input_image = prepare_image(imagePath)
	print('Evaluating webpage ...', file=sys.stderr)

	test_datagen = ImageDataGenerator(rescale = 1./255)
	test_data = test_datagen.flow(input_image, batch_size=1, shuffle=False).next()

	with graph.as_default():
		score = model.predict(test_data)
		score = float(score)

		# score bound protection
		score = np.minimum(score, 10.0)
		score = np.maximum(score, 1.0)

		print('CNN score: ' + str(score), file=sys.stderr)

	return json.dumps({"score": score})

if __name__ == "__main__":

    load_cnn_model()
    app.run(host='0.0.0.0', port=5000, debug=True)
