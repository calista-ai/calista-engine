# Calista Engine

A Deep Learning powered Engine to measure your Website's Aesthetics

## Prerequisites

* Docker
* Docker-compose

## Deployment

### Step 1 - Download the pretrained model

Download the model in the folder *CNN/src/cnn_model/* from [here](https://drive.google.com/open?id=1LPwy0xUcWS8-wwVLuKCdkodg7uutMKlL).

### Step 2 - Environment variables (optional)

Add a *.env* file in the root folder of the project and set the following variables:

| Environment variable | Description |
| :------------------: | :---------: |
| BASEURL | Base URL that is used for the requests |

### Step 3 - Run

Start:

    docker-compose -f docker-compose.yml up --build

Stop:

    Ctrl-C

**For detached mode**:

Start:

    docker-compose -f docker-compose.yml up -d --build

Stop:

    docker-compose down
