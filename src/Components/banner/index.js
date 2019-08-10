import PropTypes from 'prop-types'
import React, { Component } from "react"
import ButtonBlank from "../Button/ButtonBlank"
// import ButtonFull from "../button/button-full.js";
import "./style.scss"

class Banner extends Component {
  render() {
    const { trendingMovie: { backdrop_path, title, overview } } = this.props

    //ToDo random movie from trending
    return (
      <div id="hero" className="Banner" style={{ backgroundImage: `url(http://image.tmdb.org/t/p/original/${backdrop_path} )`}}>
        <div className="content">
          <h1>{title}</h1>
          <p>{overview}</p>
          <div className="button-wrapper">
            <ButtonBlank buttonText="View Now" />
          </div>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

Banner.defaultProps = {
  trendingMovie: [],
}
Banner.propTypes = {
  trendingMovie: PropTypes.obj,
}
export default Banner;
