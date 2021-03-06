import React from 'react';

import Point from './Point';

export default function PointList(props) {
  return (
    <ul className="point-list">
      {props.points.map((point, index) => (
        <Point point={point} key={index} onClick={props.onPointClick} />
      ))}
    </ul>
  );
}
