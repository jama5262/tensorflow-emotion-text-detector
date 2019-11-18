import * as types from "../../utils/constants/actionContants"

const initialState = {
  query: ""
}

export const query = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUERY:
      state = { ...state, query: action.query }
      break;
    default:
      break;
  }
  return state
}