package app

import (
	"fmt"
	"net/http"
)

func ReactUI(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "React UI Here")
}

func PredictEmotion(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Predict Emotion")
}
