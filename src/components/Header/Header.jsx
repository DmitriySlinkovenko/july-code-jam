import React from "react";
import "./Header.css";

export default function Header() {
  return (
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
  );
}
