import PropTypes from 'prop-types'
import React from "react";
import { Link } from 'react-router-dom'

import { Movie, Overlay, Title, Rating, Plot } from './style'

function MovieThumbnail(props) {
  return (
    <Link to={`/play/${props.id}`}>
      <Movie backgroundImage={props.backDrop }>
        <Overlay>
          <Title>{props.title}</Title>
          <Rating>{props.rating} / 10</Rating>
          <Plot>{props.plot}</Plot>
        </Overlay>
      </Movie>
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
