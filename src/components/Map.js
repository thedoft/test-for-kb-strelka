import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

import PointList from './PointList';

import * as pointCollection from '../points.json';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZG9mdCIsImEiOiJja2thMjl0aGwwMG9yMndwaWY4M2ptZHBvIn0.8EEq1Pq2hDrZUuIlupJBdQ';

export default function Map(props) {
  const points = pointCollection.features;

  const mapContainer = useRef();

  const [mapState, setMapState] = useState({
    lng: 20.5101,
    lat: 54.7101,
    zoom: 12.00,
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
        <div style={{position: 'sticky', top: 0, backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '#000 1px solid'}}>
          <h1 style={{margin: 0}}>Список мест</h1>
          <NavLink to="/">
            <button style={{height: 50, width: 100, margin: 0, padding: 0}}>Назад</button>
          </NavLink>
        </div>
        <PointList points={points} />
      </div>
      <p style={{display: 'inline-block', backgroundColor: '#fff', position: 'absolute', top: 0, right: '10px', zIndex: 1}}>Longitude: {mapState.lng} | Latitude: {mapState.lat} | Zoom: {mapState.zoom}</p>
      <div className="map__right-column" ref={mapContainer} />
    </div>
  );
}
