const API_KEY = "e6ca854fb1aff4f3fb6b40ee8720f51e";

export const REQUEST_FEATURED_MOVIES = "REQUEST_FEATURED_MOVIES";
export const RECEIVE_FEATURED_MOVIES = "RECEIVE_FEATURED_MOVIES";

export const getFeaturedMovies = (title, url) => {
  return dispatch => {
    dispatch({ type: REQUEST_FEATURED_MOVIES })
    fetch(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => dispatch({ type: RECEIVE_FEATURED_MOVIES, title, payload: data, success: true }))
      .catch(error => {
        dispatch({ type: RECEIVE_FEATURED_MOVIES, payload: error, success: false })
      })
    }
};
