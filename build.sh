#!/bin/bash

sudo docker stop gradhire-chatbot
docker build -t gradhire-chatbot -f Dockerfile .
docker run -d -p 3000:3000 gradhire-chatbot