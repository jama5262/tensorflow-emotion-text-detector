package main

import (
	"net/http"

	"github.com/jama5262/tensorflow-emotion-text-detector/app"
)

func main() {
	http.HandleFunc("/", app.ReactUI)
	http.HandleFunc("/predict", app.PredictEmotion)
	http.ListenAndServe(":5000", nil)
}
