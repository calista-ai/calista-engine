# Install python image in container
FROM python:3.7

RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean && \
    apt-get install -y python3-opencv

# Create and set the working directory
RUN mkdir -p /app/cnn
WORKDIR /app/cnn

# Copy the requirements to the container
COPY requirements.txt /app/cnn/

# Install dependencies
RUN pip3 install -r ./requirements.txt

# Copy the server files to the container
COPY . /app/cnn/

WORKDIR /app/cnn/src

CMD [ "python", "-u", "app.py"]
