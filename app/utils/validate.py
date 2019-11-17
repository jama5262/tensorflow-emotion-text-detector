def isQueryValid(request):
    if request.args.get("query") is None:
        return False
    return True


def isQueryEmpty(request):
    if not request.args.get("query"):
        return False
    return True
