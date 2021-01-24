import React from 'react';

export default function Point(props) {
  const { name, rating } = props.point.properties;

  const handleClick = () => {
    props.onClick(props.point);
  };

  return (
    <li className="point">
      <p tabIndex={props.index} onClick={handleClick} onBlur={handleClick}>{name}, рейтинг: {rating}</p>
    </li>
  );
}
