import { combineReducers } from "redux";

import { query } from "./queryReducer"
import { mainEmotion } from "./mainEmotionReducer"

export const reducer = combineReducers({
  query,
  mainEmotion
});