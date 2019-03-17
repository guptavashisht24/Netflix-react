import PropTypes from 'prop-types'
import React from "react";
import { Link } from 'react-router-dom'

function MovieThumbnail(props) {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="Item" style={{ backgroundImage: "url(" + props.backDrop + ")" }}>
        <div className="overlay">
          <div className="title">{props.title}</div>
          <div className="rating">{props.rating} / 10</div>
          <div className="plot">{props.plot}</div>
        </div>
      </div>
    </Link>
  );
}

MovieThumbnail.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  backDrop: PropTypes.string,
  rating: PropTypes.number,
  plot: PropTypes.string
}

export default MovieThumbnail;
