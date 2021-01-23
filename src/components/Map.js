import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import PointList from './PointList';

import * as pointCollection from '../points.json';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZG9mdCIsImEiOiJja2thMjl0aGwwMG9yMndwaWY4M2ptZHBvIn0.8EEq1Pq2hDrZUuIlupJBdQ';

export default function Map(props) {
  const points = pointCollection.features;

  const mapContainer = useRef();

  const [mapState, setMapState] = useState({
    lng: 5,
    lat: 34,
    zoom: 2,
  });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom,
    });

    map.on('move', () => {
      setMapState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }, []);

  return (
    <div className="map">
      <div className="map__left-column">
        <PointList points={points} />
      </div>
      <p style={{display: 'inline-block', backgroundColor: '#fff', position: 'absolute', top: 0, right: '10px', zIndex: 1}}>Longitude: {mapState.lng} | Latitude: {mapState.lat} | Zoom: {mapState.zoom}</p>
      <div className="map__right-column" ref={mapContainer} />
    </div>
  );
}
