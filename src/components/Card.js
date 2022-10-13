import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.img} />
      <div className="card-stats">
        <img className="card-star" src={require("../images/star.png")} />
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