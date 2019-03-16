import {
  RECEIVE_FEATURED_MOVIES,
  REQUEST_FEATURED_MOVIES
 } from '../Actions'

let initialState = {
  isLoading: false,
  success: false,
}

let homepage = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_FEATURED_MOVIES:
      return { ...state, isLoading: true }
    case RECEIVE_FEATURED_MOVIES:
      return { ...state, [action.title]: action.payload, isLoading: false, success: action.success }
    default:
        return state
  }
}

export default homepage
