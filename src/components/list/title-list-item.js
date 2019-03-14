import PropTypes from 'prop-types'
import React from "react";

function Item(props) {
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

Item.propTypes = {
  title: PropTypes.string,
  backDrop: PropTypes.string,
  rating: PropTypes.number,
  plot: PropTypes.string
}
export default Item;
