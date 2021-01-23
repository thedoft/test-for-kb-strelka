import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Туристические точки притяжения Калиниграда</h1>
      <NavLink to="/map">
        <button className="home__button">Перейти к карте</button>
      </NavLink>
    </div>
  );
}
