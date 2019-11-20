# tensorflow-emotion-text-detector

This is an app that comprises of dockerized tensorflow serving model and flask server that communicate together using docker-compose to predict the emotion of a text

[![Build Status](https://travis-ci.org/jama5262/tensorflow-emotion-text-detector.svg?branch=flask-server)](https://travis-ci.org/jama5262/tensorflow-emotion-text-detector)
[![Coverage Status](https://coveralls.io/repos/github/jama5262/tensorflow-emotion-text-detector/badge.svg?branch=flask-server)](https://coveralls.io/github/jama5262/tensorflow-emotion-text-detector?branch=flask-server)

The two docker images can be found here at `Docker Hub`

1. [jama5262/tensorflow-emotion-text-detector](https://hub.docker.com/repository/docker/jama5262/tensorflow-emotion-text-detector).
2. [jama5262/flask-tensorflow-emotion-text-detector](https://hub.docker.com/repository/docker/jama5262/flask-tensorflow-emotion-text-detector)


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

This repo contains four branches which are the following

1. [`master`](https://github.com/jama5262/tensorflow-emotion-text-detector) branch - Contains the `docker-compose.yml` file. This is used to start the two containers from the tensorflow-serving and flask server docker image and to also allow communication between them. See the Installation and Usage section on how to get started

```
version: "3"

services: 
  tf-model:
    image: jama5262/tensorflow-emotion-text-detector
    ports: 
     - 8501:8501
  flask-server:
    image: jama5262/flask-tensorflow-emotion-text-detector
    ports:
      - 5000:5000
    depends_on: 
      - tf-model
```

2. [`colab-notebook`](https://github.com/jama5262/tensorflow-emotion-text-detector/tree/colab-notebook) branch - This contains the notebook used to `create` and `export` the tensorflow estimator model

3. [`flask-server`](https://github.com/jama5262/tensorflow-emotion-text-detector/tree/flask-server) branch - Contains the flask server-side that hosts the react build files and the predict emotion endpoint.

4. [`react-client`](https://github.com/jama5262/tensorflow-emotion-text-detector/tree/react-client) branch - And this branch contains the react client-side UI

## Installation

### Cloning
Clone this repo from the `master` branch to your local machine using `https://github.com/jama5262/tensorflow-emotion-text-detector.git`

After cloning, `cd` into the project

Great the project has been setup 👍

## Usage

_**Before you start using, please check that the ports `5000` and `8501` are not in use**_

Port `5000` is used by flask server and port `8501` is used by tensorflow serving

To start using it locally, run the following `docker` command
```
docker-compose up
```

After that check your http://localhost:5000

## Support

Reach out to me at one of the following places!

- Email at jama3137@gmail.com
- Twitter [timedjama5262](https://twitter.com/timedjama5262)

## License

```
MIT License

Copyright (c) 2019 Jama Mohamed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
