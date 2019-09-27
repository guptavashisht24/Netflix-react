import PropTypes from 'prop-types'
import React, { Component } from 'react';
import YouTube from 'react-youtube'
import { connect } from 'react-redux'

import { getMovieTrailer } from '../../Actions'
import { VideoWrapper } from './style'
class MoviePlayer extends Component {
  constructor() {
    super()
  }

  UNSAFE_componentWillMount () {
    this.movieId = this.props.match.params.id
    this.props.getMovieTrailer(this.movieId)
  }
  render() {
    const youtubePlayerConfig = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
    return (
      <VideoWrapper>
        <YouTube
          videoId={this.props.movieTrailerID}
          opts={youtubePlayerConfig}
          className='youtubeIframe'
        />
      </VideoWrapper>
    );
  }
}

MoviePlayer.propTypes = {
  getMovieTrailer: PropTypes.func,
  match: PropTypes.object,
  movieTrailerID: PropTypes.string,
  movie: PropTypes.object,
}

const mapStateToProps = (state) =>  {
  const movieTrailerID = state.movieDetail.movieTrailers && Array.isArray(state.movieDetail.movieTrailers.data) && state.movieDetail.movieTrailers.data[0] && state.movieDetail.movieTrailers.data[0].key
  return {
  movieTrailerID
}}

const mapDispatchToProps = (dispatch) => ({
  getMovieTrailer: (id) => dispatch(getMovieTrailer(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayer)
