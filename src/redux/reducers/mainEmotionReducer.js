import * as types from "../../utils/constants/actionContants"

const initialState = {
  data: {}
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