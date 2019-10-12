import PropTypes from "prop-types";
import React, { Component } from "react";
import MovieThumbnail from "./MovieThumbnail";
import MovieDetail from "../../Components/MovieDetail";

import { MovieDetailWrapper, NavigationWrapper, List, ThumbnailWrapper, Title } from './style'

class MovieThumbnailList extends Component {
  constructor() {
    super()
    this.state = {
      isMovieDetailVisibile: false,
      movieId: 0,
      movieThumbnailsInARow: 0,
      selectedIndex: 0,
    }
  }

  componentDidMount() {
    this.setMovieThumbnailCount();
    window.addEventListener('resize', this.setMovieThumbnailCount);
  }
  
  toggleMovieDetailVisibility = () => {
    this.setState((prevState) => ({
      isMovieDetailVisibile: !prevState.isMovieDetailVisibile
    }))
  }

  setMovieThumbnailCount = () => {
    const width = window.innerWidth;
    let movieThumbnailsInARow;
    switch (true) {
      case width > 992:
        movieThumbnailsInARow = 5;
        break;
      case width > 768 && width < 992:
        movieThumbnailsInARow = 4;
        break;
      case width > 468 && width < 768:
        movieThumbnailsInARow = 2;
        break;
      default:
        movieThumbnailsInARow = 1;
    }
    this.setState({ movieThumbnailsInARow });
  };

  incrementSelectedIndex = () => {
    this.setState(({ selectedIndex }) => ({
      selectedIndex: selectedIndex + 1
    }));
  };

  decrementSelectedIndex = () => {
    this.setState(({ selectedIndex }) => ({
      selectedIndex: selectedIndex - 1
    }));
  };

  setMovieId = (movieId) => {
    this.setState({
      movieId,
    })
  }

  render () {
    const { movieList=[], title } = this.props
    const { isMovieDetailVisibile, movieId, movieThumbnailsInARow, selectedIndex } = this.state
    if(!movieList.length)
      return null
    const renderMovieThumbnail = movieList.map(({backdrop_path, overview, vote_average,id, name, original_title, title,}, i) => {
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
              this.setMovieId(movieId)
              this.toggleMovieDetailVisibility(!isMovieDetailVisibile)
              e.preventDefault()
            }}
            showDetailButton={!isMovieDetailVisibile}
          />
        );
      });
    const style = selectedIndex >= 1 
      ? { transform: `translateX(-${selectedIndex * 100}%)` }
      : {};
    let slidesCount;
    if (movieThumbnailsInARow) {
      slidesCount = Math.ceil(movieList.length / movieThumbnailsInARow);
    }    
    const renderNavigation = slidesCount >= 1 
      ? (
        <NavigationWrapper>
          <button className={`navigation-icon ${ selectedIndex === 0 ? 'disabled' : ''}`}
            onClick={this.decrementSelectedIndex}
            disabled={selectedIndex === 0 ? true : false}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            className={`navigation-icon ${
              selectedIndex === slidesCount - 1 ? 'disabled' : ''
            }`}
            onClick={this.incrementSelectedIndex}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </NavigationWrapper>
      )
    : null;
    const renderMovieDetail = isMovieDetailVisibile 
      ? ( <MovieDetailWrapper>
            <MovieDetail movieId={movieId} onClose={() => this.toggleMovieDetailVisibility(false)} />
          </MovieDetailWrapper>
        )
      : null    
    return (
      <ThumbnailWrapper>
        <Title>{title}</Title>
        {renderNavigation}
        <List style={style}>
          {renderMovieThumbnail}
        </List>
        {renderMovieDetail}
    </ThumbnailWrapper>
    )
  }
}

MovieThumbnailList.propTypes = {
  title: PropTypes.string,
  movieList: PropTypes.array,
};

export default MovieThumbnailList;
