from flask import Blueprint, jsonify, request
from app.repository.repository import predict

views = Blueprint("views", __name__)


@views.route("", methods=["GET"])
def renderReactPage():
    return "React Page here", 200


@views.route("predict", methods=["POST"])
def getEmotion():
    response = predict(request)
    return jsonify(response), response["status"]
