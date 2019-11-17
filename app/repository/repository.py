from app.utils.validate import isQueryValid, isQueryEmpty
from app.utils.return_messages import success, error
import requests
import json


def predict(request):
    if not isQueryValid(request):
        return error(404, "Please make sure to have a valid param in the url, that is the 'query' param")
    elif not isQueryEmpty(request):
        return error(422, "Looks like you didn't pass anything")

    query = request.args.get("query")

    tfModelRequestBody = {
        "signature_name": "classification",
        "examples": [{
            "text": query
        }]
    }

    response = requests.post(
        "http://localhost:8501/v1/models/emo-model:classify", json=tfModelRequestBody)

    emotions = ['sadness', 'joy', 'love', 'anger', 'fear', 'surprise']

    predictedEmotions = response.json()["results"][0]

    results = {}

    for index, prediction in enumerate(response.json()["results"][0]):
        results.update({emotions[index]: prediction[1]})
    
    results = sorted(results.items(), key=lambda x: x[1], reverse=True)[:3]

    return success(200, results)
