# tensorflow-emotion-text-detector (Flask Server Side)

This is an app that comprises of dockerized tensorflow serving model and flask server that communicate together using docker-compose to predict the emotion of a text

[![Build Status](https://travis-ci.org/jama5262/tensorflow-emotion-text-detector.svg?branch=flask-server)](https://travis-ci.org/jama5262/tensorflow-emotion-text-detector)
[![Coverage Status](https://coveralls.io/repos/github/jama5262/tensorflow-emotion-text-detector/badge.svg?branch=flask-server)](https://coveralls.io/github/jama5262/tensorflow-emotion-text-detector?branch=flask-server)

## Endpoints
| Title | Endpoint | Method | Description |
| ------------- | ------------- | ------------- | ------------- |
| Render UI  | /  | GET  | Render the react link previewer UI  |
| Preview Links  | /predict?query=`Happy to see you here`  | POST  | Returns the predict emotion to the text  |

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Create-You-Docker-Image](create-your-docker-image)
- [Testing](#testing)
- [License](#license)

## Installation

### Cloning
Clone this repo to your local machine using `https://github.com/jama5262/tensorflow-emotion-text-detector.git`

### Setup
To get started, cd into the project and follow the following steps
1. #### Switch to `flask-server` branch
```
git checkout flask-server
```

2. #### Create a virtual environment

```
virtualenv venv
```

And activate (For Windows)

```
venv\Script\activate
```

3. #### Create a `.env` file
Create a `.env` file and add the following
```
FLASK_APP=run.py
FLASK_ENV=development
GIPHY_API_KEY=dc6zaTOxFJmzC
TF_MODEL_URL=localhost
```

4. #### Installing all packages
After creating the `.env` file run the following to install all the packages needed
```
pip install -r requirements.txt
```
Great the project has been setup 👍

## Usage

Next is to start our docker image so that flask can send requests to get the predicted emotions. To start the container, run the following

```
docker run -it -p 8501:8501 jama5262/tensorflow-emotion-text-detector
```

And finally, to start using it locally, run the following
```
flask run
```

You can find the app here http://localhost:5000

### Sample success and error responses
#### Success
```
{
  "data": [
    {
      "emoji": "😂",
      "emotion": "joy",
      "gif": "https://media3.giphy.com/media/l0MYrDfIgeT5ORrwY/giphy.gif?cid=e1bb72ff0fed79b9271b871d2a0e895965d7da47bcc406e0&rid=giphy.gif",
      "probability": 0.845123768
    },
    {
      "emoji": "😲",
      "emotion": "surprise",
      "probability": 0.0924368054
    },
    {
      "emoji": "😍",
      "emotion": "love",
      "probability": 0.0284986515
    }
  ],
  "status": 200
}
```
#### Error
```
{
  "error": "Looks like you didn't pass anything",
  "status": 422
}
```

## Create-Your-Docker-Image

This repo also contains a `Dockerfile` with has all the instructions to create a docker image and run on a container. Simply run the following. Replace `<PUT-IMAGE-NAME-HERE>` with you own image name

```
docker build -t <PUT-IMAGE-NAME-HERE> .
```

To start the container just run the following

```
docker run -it -p 5000:5000 <PUT-IMAGE-NAME-HERE>
```

## Testing

🧪 The project uses `pytest`. To test, run the following. **This will display all test if they passes or not and a coverage report**

```
pytest --cov=app/ tests/tests.py
```

## Support

Reach out to me at one of the following medias!

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
