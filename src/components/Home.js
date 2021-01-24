import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Туристические точки притяжения Калиниграда</h1>
      <NavLink className="home__navlink" to="/map">
        <button className="button home__button">Перейти к карте</button>
      </NavLink>
      <div className="home__overlay" />
    </div>
  );
}
