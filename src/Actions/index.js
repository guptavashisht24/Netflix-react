const API_KEY = "e6ca854fb1aff4f3fb6b40ee8720f51e";

export const REQUEST_ALL_FEATURED_MOVIES = "REQUEST_ALL_FEATURED_MOVIES";
export const RECEIVE_ALL_FEATURED_MOVIES = "RECEIVE_ALL_FEATURED_MOVIES";

export const getFeaturedMovies = (categories) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_ALL_FEATURED_MOVIES })
    // fetch(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}`)
    //   .then(res => res.json())
    //   .then(data => dispatch({ type: RECEIVE_ALL_FEATURED_MOVIES, title, payload: data, success: true }))
    //   .catch(error => {
    //     dispatch({ type: RECEIVE_ALL_FEATURED_MOVIES, payload: error, success: false })
    //   })
    // }
    let featuredMovies = categories.map(async ({ title, url }) => {
      let data = await fetch(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}`)
      let response = await data.json()
      return {title, data: response.results}
    })
    let featuredMoviesList = await Promise.all(featuredMovies)
    dispatch({ type: RECEIVE_ALL_FEATURED_MOVIES, payload: featuredMoviesList, success: true })
    //console.log(newData)
  }
};
