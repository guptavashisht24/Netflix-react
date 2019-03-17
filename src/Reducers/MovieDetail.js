
let initialState = {
  isLoading: false,
  MovieDetail: [],
  success: false,
}
const movieDetail = (state=initialState, action) => {
  switch(action.type) {
    case 'REQUEST_MOVIE_DETAIL':
      return { ...state, isLoading:true }
    case 'RECEIVE_MOVIE_DETAIL':
      return { ...state, movieDetail: action.payload, isLoading: false }
    default:
        return state
  }
}

export default movieDetail
