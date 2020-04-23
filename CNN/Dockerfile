# Install python image in container
FROM python:3.7

RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean

# Create and set the working directory
RUN mkdir -p /app/cnn
WORKDIR /app/cnn

# Copy the requirements to the container
COPY requirements.txt /app/cnn/

# Install dependencies
RUN pip3 install -r ./requirements.txt

# Copy the server files to the container
COPY . /app/cnn/

#ENV FLASK_APP "/app/cnn/app.py"
#ENV FLASK_ENV "development"
#ENV PYTHONUNBUFFERED=0

WORKDIR /app/cnn/src

# Run the client
# CMD [ "flask", "run", "--host", "0.0.0.0"]
CMD [ "python", "-u", "app.py"]


#FROM ubuntu:latest
#RUN apt-get update -y
#RUN apt-get install -y python-pip python-dev build-essential
#RUN mkdir -p /app/cnn
#WORKDIR /app/cnn
#COPY . /app/cnn
#RUN pip install -r requirements.txt
#ENTRYPOINT ["python"]
#CMD ["src/try.py"]
