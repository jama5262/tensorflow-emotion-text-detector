import * as types from "../../utils/constants/actionContants"

const initialState = {
  data: {
    show: false,
    message: "This is an alert message",
    variant: "success"
  }
}

export const alert = (state = initialState, action) => {
  switch (action.type) {
    case types.ALERT:
      state = { ...state, data: action.data }
      break;
    default:
      break;
  }
  return state
}