import React from 'react';

export default function Point(props) {
  const { name, rating } = props.point.properties;

  const handleClick = () => {
    props.onClick(props.point);
  };

  const handleBlur = () => {
    props.onBlur(props.point);
  };

  return (
    <li className="point">
      <p className="point__place-name"
        tabIndex={props.index}
        onClick={handleClick}
        onBlur={handleBlur}
      >
        {name}, рейтинг: <b>{rating}</b>
      </p>
    </li>
  );
}
