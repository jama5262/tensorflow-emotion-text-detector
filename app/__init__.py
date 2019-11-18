from flask import Flask, jsonify
from flask_cors import CORS
from os import environ
from app.views.views import views


def pageNotFound(error):
    return jsonify({
        "status": 404,
        "error": "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again."
    }), 404


def methodNotAllowed(error):
    return jsonify({
        "status": 405,
        "error": "The method is not allowed for the requested URL"
    })


def serverError(error):
    return jsonify({
        "status": 500,
        "error": "There was a server error, please try agin later"
    })


def createApp():
    app = Flask(__name__)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    print("Flask running in " + app.config["ENV"] + " mode")
    app.register_blueprint(views, url_prefix="/")
    app.register_error_handler(404, pageNotFound)
    app.register_error_handler(405, methodNotAllowed)
    app.register_error_handler(500, serverError)
    return app
