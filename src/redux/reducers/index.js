import { combineReducers } from "redux";

import { query } from "./queryReducer"
import { mainEmotion } from "./mainEmotionReducer"
import { subEmotions } from "./subEmotionReducer"
import { loading } from "./loadingReducer"

export const reducer = combineReducers({
  query,
  mainEmotion,
  subEmotions,
  loading
});