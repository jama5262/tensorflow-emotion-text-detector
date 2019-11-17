import * as types from "../../utils/constants/actionContants"

const initialState = {
  data: {
    "emoji": "😡",
    "emotion": "anger",
    "gif": "https://media2.giphy.com/media/d1FKZu9e8TKvqVB6/giphy.gif?cid=e1bb72ffc6a8f24353623a8c8f70c5d603032c6d30ca0cc9&rid=giphy.gif",
    "probability": 0.679124
  }
}

export const mainEmotion = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MAIN_EMOTION:
      state = { ...state, data: action.mainEmotion }
      break;
    default:
      break;
  }
  return state
}