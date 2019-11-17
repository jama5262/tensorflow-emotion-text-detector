from app.utils.validate import isQueryValid, isQueryEmpty
from app.utils.return_messages import success, error
import requests
from os import environ
import json

emotions = ['sadness', 'joy', 'love', 'anger', 'fear', 'surprise']
emojis = ['😢', '😂', '😍', '😡', '😱', '😲']


def predict(request):
    if not isQueryValid(request):
        return error(404, "Please make sure to have a valid param in the url, that is the 'query' param")
    elif not isQueryEmpty(request):
        return error(422, "Looks like you didn't pass anything")

    query = request.args.get("query")

    response = getEmotion(query)

    results = sortByProbability(response.json()["results"][0])

    response = getGif(results[0]["emotion"])

    results[0].update({"gif": response.json()["data"]
                       ["images"]["original"]["url"]})

    return success(200, results)


def getEmotion(query):
    tfModelRequestBody = {
        "signature_name": "classification",
        "examples": [{
            "text": query
        }]
    }
    return requests.post(
        "http://localhost:8501/v1/models/emo-model:classify", json=tfModelRequestBody)


def getGif(tag):
    return requests.get("https://api.giphy.com/v1/gifs/random", params={
        "api_key": environ.get("GIPHY_API_KEY"),
        "tag": tag
    })


def sortByProbability(predictedEmotions):
    results = []
    for index, prediction in enumerate(predictedEmotions):
        results.append({
            "emotion": emotions[index],
            "probability": prediction[1],
            "emoji": emojis[index]
        })
    return sorted(results, key=lambda x: x['probability'], reverse=True)[:3]
