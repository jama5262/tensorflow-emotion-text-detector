# tensorflow-emotion-text-detector

This is an app that comprises of dockerized tensorflow serving model and flask server that predicts the emotion of a text

[![Build Status](https://travis-ci.org/jama5262/tensorflow-emotion-text-detector.svg?branch=flask-server)](https://travis-ci.org/jama5262/tensorflow-emotion-text-detector)
[![Coverage Status](https://coveralls.io/repos/github/jama5262/tensorflow-emotion-text-detector/badge.svg?branch=flask-server)](https://coveralls.io/github/jama5262/tensorflow-emotion-text-detector?branch=flask-server)

## Demo

Demo|
------------ |
<img src="https://github.com/jama5262/tensorflow-emotion-text-detector/blob/react-client/gif/image1.gif" alt="alt text" height="500px"> | 

## Built-With

- [Docker](https://www.docker.com/), [Docker-Compose](https://docs.docker.com/compose/)
- [Tensorflow](https://www.tensorflow.org/), [Tensorflow Estimator](https://www.tensorflow.org/guide/estimator), [Tensorflow-Serving](https://www.tensorflow.org/tfx/guide/serving), Google-Colab
- [Flask](http://flask.palletsprojects.com/en/1.1.x/)
- [React](https://reactjs.org/), [Redux](https://redux.js.org/), [React-Redux](https://react-redux.js.org/), [React Bootstrap](https://react-bootstrap.github.io/)
- [React Bootstrap](https://react-bootstrap.github.io/)

This repo contains four branches in which are the following

1. `master` branch - Contains the `docker-compose.yml` file. This is used to start two containers from the tensorflow-serving and flask server docker image and to also allow communication between them

2. `colab-notebook` branch - This contains the notebook used to create the tensorflow estimator model

3. `flask-server` branch - Contains the flask server-side that hosts the react build files and the predict emotion endpoint.

4. `react-client` branch - And this branch contains the react client-side UI

