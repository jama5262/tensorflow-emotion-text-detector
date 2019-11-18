import { combineReducers } from "redux";

import { query } from "./queryReducer"
import { mainEmotion } from "./mainEmotionReducer"
import { subEmotions } from "./subEmotionReducer"
import { loading } from "./loadingReducer"
import { alert } from "./alertReducer"

export const reducer = combineReducers({
  query,
  mainEmotion,
  subEmotions,
  loading,
  alert
});