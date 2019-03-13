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

export default Item;
