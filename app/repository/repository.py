from app.utils.validate import isQueryValid, isQueryEmpty
from app.utils.return_messages import success, error


def predict(request):
    if not isQueryValid(request):
        return error(404, "Please make sure to have a valid param in the url, that is the 'query' param")
    elif not isQueryEmpty(request):
        return error(422, "Looks like you didn't pass anything")

    
    return success(200, "This all ok")
