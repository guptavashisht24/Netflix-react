const API_KEY = "e6ca854fb1aff4f3fb6b40ee8720f51e";

export const REQUEST_ALL_FEATURED_MOVIES = "REQUEST_ALL_FEATURED_MOVIES";
export const RECEIVE_ALL_FEATURED_MOVIES = "RECEIVE_ALL_FEATURED_MOVIES";
export const REQUEST_MOVIE_DETAIL = "REQUEST_MOVIE_DETAIL";
export const RECEIVE_MOVIE_DETAIL = "RECEIVE_MOVIE_DETAIL";
export const REQUEST_TRENDING_MOVIES = "REQUEST_TRENDING_MOVIES";
export const RECEIVE_TRENDING_MOVIES = "RECEIVE_TRENDING_MOVIES";
export const REQUEST_SIMILAR_MOVIES = "REQUEST_SIMILAR_MOVIES";
export const RECEIVE_SIMILAR_MOVIES = "RECEIVE_SIMILAR_MOVIES";

export const getFeaturedMovies = (categories) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_ALL_FEATURED_MOVIES })
    let featuredMovies = categories.map(async ({ title, url }) => {
      let data = await fetch(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}`)
      let response = await data.json()
      return {title, data: response.results}
    })
    let featuredMoviesList = await Promise.all(featuredMovies)
    dispatch({ type: RECEIVE_ALL_FEATURED_MOVIES, payload: featuredMoviesList, success: true })
  }
};

export const getMovieDetail = (id) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_MOVIE_DETAIL })
    let data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    let movieDetail = await data.json()
    let movieCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    let movieCastDetails = await movieCast.json()
    dispatch({ type: RECEIVE_MOVIE_DETAIL, payload: { ...movieDetail, ...movieCastDetails }})
  }
}

export const getTrendingMovies = () => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_TRENDING_MOVIES })
    let data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`)
    let trendingMovies = await data.json()
    dispatch({ type: RECEIVE_TRENDING_MOVIES, payload: trendingMovies.results })
  }
}

export const getSimilarMovie = (id) => {
  return async (dispatch) => {
    dispatch( {type: REQUEST_SIMILAR_MOVIES })
    let data = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`)
    let similarMovies  = await data.json()
    dispatch({ type: RECEIVE_SIMILAR_MOVIES, payload: similarMovies })
  }
}
