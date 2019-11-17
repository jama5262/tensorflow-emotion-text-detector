def success(statusCode, data):
    return {
        "status": statusCode,
        "data": data
    }


def error(statusCode, message):
    return {
        "status": statusCode,
        "error": message
    }
