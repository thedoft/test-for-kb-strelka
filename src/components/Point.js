import React from 'react';

export default function Point(props) {
  const { name, rating } = props.point.properties;

  const handleClick = () => {
    props.onClick(props.point);
  };

  return (
    <li className="point">
      <p className="point__place-name" onClick={handleClick}>
        {name}, рейтинг: <b>{rating}</b>
      </p>
    </li>
  );
}
