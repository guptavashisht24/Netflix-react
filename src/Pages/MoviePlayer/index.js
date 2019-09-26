import PropTypes from 'prop-types'
import React, { Component } from 'react';
import YouTube from 'react-youtube'
import { connect } from 'react-redux'

import { getMovieTrailer } from '../../Actions'

class MoviePlayer extends Component {
  constructor() {
    super()
  }

  UNSAFE_componentWillMount () {
    this.movieId = this.props.match.params.id
    console.log(this.movieId)
    this.props.getMovieTrailer(this.movieId)
  }
  render() {
    const youtubePlayerConfig = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
    console.log("this.props.movieTrailerID", this.props.movieTrailerID)
    return (
      <div>
        <YouTube
          videoId={this.props.movieTrailerID}
          opts={youtubePlayerConfig}
        />
      </div>
    );
  }
}

MoviePlayer.propTypes = {
  getMovieTrailer: PropTypes.func,
  movieTrailerID: PropTypes.string,
  movie: PropTypes.object,
}

const mapStateToProps = (state) =>  {
  const movieTrailerID = state.movieDetail.movieTrailers && Array.isArray(state.movieDetail.movieTrailers.data) && state.movieDetail.movieTrailers.data[0] && state.movieDetail.movieTrailers.data[0].key
  return {
  movieTrailerID
  //movieTrailers: state.movieDetail.movieTrailers.data,
}}

const mapDispatchToProps = (dispatch) => ({
  //getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  getMovieTrailer: (id) => dispatch(getMovieTrailer(id)),
  //getSimilarMovie: (id) => dispatch(getSimilarMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayer)
