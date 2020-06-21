# Calista Engine

A Deep Learning powered engine to measure your Website's Aesthetics

![](/media/engine.png)

## How to use

* Step 1: Insert the URL of the webpage that you want to evaluate its aesthetics

* Step 2: Wait a few seconds for the assessment process to complete

* Step 3: The aesthetics score is ready!

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
