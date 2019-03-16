import PropTypes from "prop-types";
import React from "react";
import MovieThumbnail from "./MovieThumbnail.js";

class MovieThumbnailList extends React.Component {
  render() {
    let { movieList } = this.props
    let renderMovieDetails = "";
    if (movieList) {
      renderMovieDetails = movieList.map(function(videoDetail, i) {
        let backDrop;
        let name;
        let description;
        let rating;
        if (i < 5) {
          backDrop =
            "http://image.tmdb.org/t/p/original" + videoDetail.backdrop_path;
          description = videoDetail.overview;
          rating = videoDetail.vote_average;
          if (!videoDetail.name) {
            name = videoDetail.original_title;
          } else if (videoDetail.title) {
            name = videoDetail.title;
          } else {
            name = videoDetail.name;
          }
          return (
            <MovieThumbnail
              key={i}
              title={name}
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
      <div className="TitleList">
        <div className="Title">
          <h2>{this.props.title}</h2>
          <div className="titles-wrapper">{renderMovieDetails}</div>
        </div>
      </div>
    );
  }
}

MovieThumbnailList.propTypes = {
  title: PropTypes.string,
  movieList: PropTypes.array,
};

export default MovieThumbnailList;
