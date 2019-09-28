import PropTypes from "prop-types";
import React from "react";
import MovieThumbnail from "./MovieThumbnail";

import { ThumbnailWrapper, Title } from './style'
function MovieThumbnailList({ movieList=[], title }) {
    let renderMovieDetails = "";
    if (movieList) {
      renderMovieDetails = movieList.map(({backdrop_path, overview, vote_average,id, name, original_title, title,}, i) => {
        let backDrop, movieTitle, description, rating, movieId;
        if (1) {
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
            />
          );
        }
        return <div key={i} />;
      });
    }
    return (
      <ThumbnailWrapper>
        <div className="title">
          <Title>{title}</Title>
          {/* <div className="titles-wrapper">{renderMovieDetails}</div> */}
          {renderMovieDetails}
        </div>
      </ThumbnailWrapper>
    );
}

MovieThumbnailList.propTypes = {
  title: PropTypes.string,
  movieList: PropTypes.array,
};

export default MovieThumbnailList;
