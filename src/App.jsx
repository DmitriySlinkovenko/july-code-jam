import { useState } from "react";
import placeholder from "../src/assets/No-Image-Placeholder.svg.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <p className="header__logo">Logo Goes Here</p>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item">Home</li>
              <li className="nav__item">About</li>
              <li className="nav__item">Saved Recipes</li>
              <li className="nav__item">Logout</li>
            </ul>
          </nav>
        </div>
      </header>
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
              <div className="card">
                <img src={placeholder} alt="" className="card__image" />
                <div className="card__info">
                  <p className="card__heading">Cocktail Name</p>
                </div>
              </div>
              <div className="card">
                <img src={placeholder} alt="" className="card__image" />
                <div className="card__info">
                  <p className="card__heading">Cocktail Name</p>
                </div>
              </div>
              <div className="card">
                <img src={placeholder} alt="" className="card__image" />
                <div className="card__info">
                  <p className="card__heading">Cocktail Name</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
