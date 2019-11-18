import * as types from "../../utils/constants/actionContants"

export const addQueryAction = query => ({ type: types.ADD_QUERY, query })
export const addMainEmotionAction = mainEmotion => ({ type: types.ADD_MAIN_EMOTION, mainEmotion })
export const addSubEmotionAction = subEmotion => ({ type: types.ADD_SUB_EMOTION, subEmotion })
export const loadingAction = loading => ({ type: types.LOADING, loading })