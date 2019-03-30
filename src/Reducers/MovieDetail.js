
let initialState = {
  isLoading: false,
  data: {},
  similarMovies: {
    isLoading: false,
    data: []
  },
  movieTrailers: {
    isLoading: false,
    data: []
  },
  success: false,
}
const movieDetail = (state=initialState, action) => {
  switch(action.type) {
    case 'REQUEST_MOVIE_DETAIL':
      return { ...state, isLoading:true }
    case 'RECEIVE_MOVIE_DETAIL':
      return { ...state, data: action.payload, isLoading: false }
    case 'REQUEST_SIMILAR_MOVIES':
      return { ...state, similarMovies : { isLoading: true } }
    case 'RECEIVE_SIMILAR_MOVIES':
        return { ...state, similarMovies: { data: action.payload, isLoading: false }}
    case 'REQUEST_MOVIE_TRAILER':
      return { ...state, movieTrailers : { isLoading: true } }
    case 'RECEIVE_MOVIE_TRAILER':
        return { ...state, movieTrailers: { data: action.payload, isLoading: false }}
    default:
        return state
  }
}

export default movieDetail
