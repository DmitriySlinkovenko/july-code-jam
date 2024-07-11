import React from "react";
import "./Card.css";
import placeholder from "../../assets/No-Image-Placeholder.svg.png";

export default function Card() {
  return (
    <div className="card">
      <img src={placeholder} alt="" className="card__image" />
      <div className="card__info">
        <p className="card__heading">Cocktail Name</p>
      </div>
    </div>
  );
}
