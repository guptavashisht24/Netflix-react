import { number, string, bool, func } from 'prop-types'
import React from "react";
import { Link } from 'react-router-dom'

import { ListItem, Movie, Overlay, Plot, Title, Rating } from './style'

function MovieThumbnail({ backDrop, id, plot, rating, showDetailButton, showMovieDetail, title}) {
  return (
    <ListItem>
      <Link to={`/play/${id}`} style={{display:'block', width: '100%'}}>
        <Movie backgroundImage={backDrop }>
          <Overlay>
            <Title>{title}</Title>
            <Rating>{rating} / 10</Rating>
            <Plot>{plot}</Plot>
            {showDetailButton && <button style={{cursor:'pointer'}} onClick={(e) => showMovieDetail(e, id)}>show more</button> }
          </Overlay>
        </Movie>
      </Link>
    </ListItem>
  );
}

MovieThumbnail.propTypes = {
  id: number,
  title: string,
  backDrop: string,
  plot: string,
  rating: number,
  showMovieDetail: func,
  showDetailButton: bool,
}

export default MovieThumbnail;
