import unittest
from app import createApp


class Test(unittest.TestCase):
    def setUp(self):
        self.app = createApp()
        self.client = self.app.test_client()
        self.reactPageEndpoint = "/"
        self.predictEndpoint = "/predict"
        self.pageNotFoundEndpoint = "/unknownEndpoint"

    def post(self, path, query):
        return self.client.post(path=path, query_string=query)

    def get(self, path):
        return self.client.post(path=path)

    def test_predict(self):
        response = self.post(self.predictEndpoint, "query=this is a test")
        self.assertEqual(response.status_code, 200)

    def test_page_not_found(self):
        response = self.post(self.pageNotFoundEndpoint, "")
        self.assertEqual(response.status_code, 404)

    def test_is_query_valid(self):
        response = self.post(self.predictEndpoint, "invalidQuery=")
        self.assertEqual(response.status_code, 404)

    def test_is_query_empty(self):
        response = self.post(self.predictEndpoint, "query=")
        self.assertEqual(response.status_code, 422)
