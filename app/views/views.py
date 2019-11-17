from flask import Blueprint, jsonify, request

views = Blueprint("views", __name__)


@views.route("")
def renderPage():
    return "React Page here", 200


@views.route("predict", methods=["POST"])
def getEmotion():
    return request.args.get("query"), 200
