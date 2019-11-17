import { combineReducers } from "redux";

import { query } from "./queryReducer"
import { mainEmotion } from "./mainEmotionReducer"
import { subEmotion } from "./subEmotionReducer"

export const reducer = combineReducers({
  query,
  mainEmotion,
  subEmotion
});