import PropTypes from 'prop-types'
import React, { Component } from 'react';
import YouTube from 'react-youtube'
import { connect } from 'react-redux'

import Loader from '../../Components/Loader/SecondaryLoader'

import { getMovieTrailer } from '../../Actions'
import { VideoWrapper } from './style'
class MoviePlayer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    }
  }

  UNSAFE_componentWillMount () {
    this.movieId = this.props.match.params.id
    this.props.getMovieTrailer(this.movieId)
  }

  handleReady = () => {
    this.setState({
      isLoading: false,
    })
  }
  render() {
    const { isLoading } = this.state
    const youtubePlayerConfig = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        loop: 1,
        modestbranding: 1,
        showinfo: 0,
        fs: 0,
        rel: 0,
        iv_load_policy: 3,
      }
    }
    const renderVideo =  isLoading
      ? <Loader /> : null

    return (
      <VideoWrapper>
        {renderVideo}
        <YouTube
        videoId={this.props.movieTrailerID}
        opts={youtubePlayerConfig}
        className='youtubeIframe'
        onPlay={this.handleReady}
      />
      </VideoWrapper>
    );
  }
}

MoviePlayer.propTypes = {
  getMovieTrailer: PropTypes.func,
  match: PropTypes.object,
  movieTrailerID: PropTypes.string,
}

const mapStateToProps = (state) =>  {
  const movieTrailerID = state.movieDetail.movieTrailers && Array.isArray(state.movieDetail.movieTrailers.data) && state.movieDetail.movieTrailers.data[0] && state.movieDetail.movieTrailers.data[0].key || ''
  return {
  movieTrailerID,
}}

const mapDispatchToProps = (dispatch) => ({
  getMovieTrailer: (id) => dispatch(getMovieTrailer(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayer)
