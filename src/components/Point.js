import React from 'react';

export default function Point(props) {
  return (
    <li className="point">
      <p>{props.point.properties.name}</p>
    </li>
  );
}
