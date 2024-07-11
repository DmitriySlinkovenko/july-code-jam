import React from "react";
import "./Main.css";
import Card from "../Card/Card";

export default function Main() {
  return (
    <main className="main">
      <section className="main__section">
        <div className="section__container">
          <div className="section__heading">
            <p>
              Some catchy information about the cocktail creation process or
              cocktail origin story
            </p>
            <p>
              Needs a cool background image, something flashy and party like
            </p>
          </div>
        </div>
      </section>
      <section className="main__section">
        <div className="section__container">
          <p>Main card section</p>
          <div className="card__container">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
}
