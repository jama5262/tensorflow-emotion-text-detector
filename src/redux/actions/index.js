import axios from "axios"

import * as types from "../../utils/constants/actionContants"
import { BASE_URL } from "../../utils/constants/baseUrlContant"

export const addQueryAction = query => ({ type: types.ADD_QUERY, query })
export const addMainEmotionAction = mainEmotion => ({ type: types.ADD_MAIN_EMOTION, mainEmotion })
export const addSubEmotionAction = subEmotion => ({ type: types.ADD_SUB_EMOTION, subEmotion })
export const loadingAction = loading => ({ type: types.LOADING, loading })
export const alertAction = data => ({ type: types.ALERT, data })
export const predictEmotionAction = () => {
  return (dispatch, getState) => {
    const { query } = getState()
    dispatch(loadingAction(true))
    dispatch(addMainEmotionAction({}))
    dispatch(addSubEmotionAction([]))
    dispatch(alertAction({
      show: true,
      message: "Let hope this works 🤞",
      variant: "warning"
    }))
    axios({
      method: 'post',
      baseURL: BASE_URL,
      url: '/predict',
      params: {
        query: query.query
      }
    })
    .then((response) => {
      dispatch(alertAction({
        show: true,
        message: "Success 👍",
        variant: "success"
      }))
      dispatch(addMainEmotionAction(response.data.data[0]))
      dispatch(addSubEmotionAction(response.data.data.slice(Math.max(response.data.data.length - 2, 1))))
      dispatch(loadingAction(false))
    })
    .catch((error) => {
      if (error.response) {
        dispatch(alertAction({
          show: true,
          message: error.response.data.error + " 😣",
          variant: "danger"
        }))
      } else {
        dispatch(alertAction({
          show: true,
          message: error.message + " 💀",
          variant: "danger"
        }))
      }
      dispatch(loadingAction(false))
    })
  }
}