import * as types from "../../utils/constants/actionContants"

const initialState = {
  loading: false
}

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      state = { ...state, loading: action.loading }
      break;
    default:
      break;
  }
  return state
}