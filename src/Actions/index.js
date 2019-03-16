const API_KEY = "e6ca854fb1aff4f3fb6b40ee8720f51e";
export const GET_FEATURED_MOVIES = "GET_FEATURED_MOVIES";

export const getFeaturedMovies = url => {
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => dispatch({ type: GET_FEATURED_MOVIES, payload: data }))
      .catch(e => console.log(e));
  };
};
