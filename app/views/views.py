from flask import Blueprint, jsonify, request, render_template
from app.repository.repository import predict
from flask_cors import cross_origin

views = Blueprint("views", __name__)


@views.route("", methods=["GET"])
def renderReactPage():
    return render_template('index.html'), 200


@views.route("predict", methods=["POST"])
@cross_origin()
def getEmotion():
    response = predict(request)
    return jsonify(response), response["status"]
