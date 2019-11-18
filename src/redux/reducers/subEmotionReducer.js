import * as types from "../../utils/constants/actionContants"

const initialState = {
  data: []
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