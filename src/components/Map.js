import React from 'react';

import PointList from './PointList';

import * as pointCollection from '../points.json';

export default function Map() {
  const points = pointCollection.features;

  return (
    <div className="map">
      <div className="map__left-column">
        <PointList points={points} />
      </div>
      <div className="map__right-column">
        
      </div>
    </div>
  );
}
