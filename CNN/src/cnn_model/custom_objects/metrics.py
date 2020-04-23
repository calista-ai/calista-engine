from keras import backend as K

def rmse(y_true, y_pred):
	return K.sqrt(K.mean(K.square(y_pred - y_true), axis=-1))

def euclidean_distance_loss(y_true, y_pred):
    return 0.5 * K.mean(K.square(y_pred - y_true), axis=-1)
