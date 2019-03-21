import {
  RECEIVE_ALL_FEATURED_MOVIES,
  REQUEST_ALL_FEATURED_MOVIES,
  REQUEST_TRENDING_MOVIES,
  RECEIVE_TRENDING_MOVIES
 } from '../Actions'

let initialState = {
  featuredMovies: {
    isLoading: false,
    success: false,
    movies: []
  },
  trendingMovies: {
    isLoading: false,
    success: false,
    movies: [],
  }
}

let homepage = (state = initialState, action) => {
  console.log(action.payload)
  switch(action.type) {
    case REQUEST_ALL_FEATURED_MOVIES:
      return { ...state,  featuredMovies: { isLoading : true } }
    case RECEIVE_ALL_FEATURED_MOVIES:
      return { ...state, featuredMovies: { movies: [...action.payload], isLoading: false, success: action.success} }
    case REQUEST_TRENDING_MOVIES:
      return { ...state,  trendingMovies: { isLoading : true } }
    case RECEIVE_TRENDING_MOVIES:
      return { ...state, trendingMovies: { movies: [...action.payload], isLoading: false, success: true} }
    default:
        return state
  }
}

export default homepage
