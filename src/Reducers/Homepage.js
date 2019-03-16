import { GET_FEATURED_MOVIES } from '../Actions'
let initialState = {

}

let homepage = (state = initialState, action) => {
  switch(action.type) {
    case GET_FEATURED_MOVIES:
      return {...state, data: action.payload}
    default:
        return state
  }
}

export default homepage
