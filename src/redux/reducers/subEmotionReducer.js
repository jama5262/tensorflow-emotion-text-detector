import * as types from "../../utils/constants/actionContants"

const initialState = {
  data: [
    {
      "emoji": "😢",
      "emotion": "sadness",
      "probability": 0.251239538
    },
    {
      "emoji": "😍",
      "emotion": "love",
      "probability": 0.0301972926
    }
  ]
}

export const subEmotions = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SUB_EMOTION:
      state = { ...state, data: action.subEmotion }
      break;
    default:
      break;
  }
  return state
}