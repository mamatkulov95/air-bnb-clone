import React from "react";
import starlogo from "../../images/star.png";

import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img className="card-image" src={props.img} />
      <div className="card-stats">
        <img className="card-star" src={starlogo} />
        <span>{props.rating}</span>
        <span className="card-rating">({props.scope}) • </span>
        <span className="card-rating">{props.country}</span>
      </div>
      <p className="card-author">{props.author}</p>
      <p>
        {" "}
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
