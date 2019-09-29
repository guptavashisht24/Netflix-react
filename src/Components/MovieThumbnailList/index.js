import PropTypes from "prop-types";
import React, { useState } from "react";
import MovieThumbnail from "./MovieThumbnail";
import MovieDetail from "../../Components/MovieDetail";

import { MovieDetailWrapper, List, ThumbnailWrapper, Title } from './style'

function MovieThumbnailList({ movieList=[], title }) {
  const [ isMovieDetailVisibile, toggleMovieDetailVisibility ] = useState(false)
  const [ movieId, setMovieId ] = useState(0)
  let renderMovieThumbnail = "";
  if (movieList) {
    renderMovieThumbnail = movieList.map(({backdrop_path, overview, vote_average,id, name, original_title, title,}, i) => {
      let backDrop, movieTitle, description, rating, movieId;
      backDrop = "http://image.tmdb.org/t/p/original" + backdrop_path;
      description = overview;
      rating = vote_average;
      movieId = id
      if (!name) {
        movieTitle = original_title;
      } else if (title) {
        movieTitle = title;
      } else {
        movieTitle = name;
      }
      return (
        <MovieThumbnail
          key={i}
          title={movieTitle}
          id={movieId}
          plot={description}
          backDrop={backDrop}
          rating={rating}
          showMovieDetail={(e, movieId) => {
            setMovieId(movieId)
            toggleMovieDetailVisibility(!isMovieDetailVisibile)
            e.preventDefault()
          }}
          showDetailButton={!isMovieDetailVisibile}
        />
      );
    });
  }

  return (
    <ThumbnailWrapper>
      <Title>{title}</Title>
      <List>
        {renderMovieThumbnail}
      </List>
      {isMovieDetailVisibile && <MovieDetailWrapper>
        <MovieDetail movieId={movieId} onClose={() => toggleMovieDetailVisibility(false)} />
      </MovieDetailWrapper> }
    </ThumbnailWrapper>
  );
}

MovieThumbnailList.propTypes = {
  title: PropTypes.string,
  movieList: PropTypes.array,
};

export default MovieThumbnailList;
