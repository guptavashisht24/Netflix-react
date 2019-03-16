import PropTypes from 'prop-types'
import React from "react";

function MovieThumbnail(props) {
  return (
    <div className="Item" style={{ backgroundImage: "url(" + props.backDrop + ")" }}>
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.rating} / 10</div>
        <div className="plot">{props.plot}</div>
      </div>
    </div>
  );
}

MovieThumbnail.propTypes = {
  title: PropTypes.string,
  backDrop: PropTypes.string,
  rating: PropTypes.number,
  plot: PropTypes.string
}
export default MovieThumbnail;
