import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

import PointList from './PointList';

import * as pointCollection from '../points.json';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZG9mdCIsImEiOiJja2thMjl0aGwwMG9yMndwaWY4M2ptZHBvIn0.8EEq1Pq2hDrZUuIlupJBdQ';

export default function Map() {
  const points = pointCollection.features;

  const mapContainer = useRef(null);

  const [map, setMap] = useState(null);
  const [mapState, setMapState] = useState({
    lng: 20.5101,
    lat: 54.7101,
    zoom: 11.00,
  });

  const handlePointClick = (point) => {
    point.marker.togglePopup();
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom,
    });

    map.on('load', () => {
      map.addSource('points', {
        type: 'geojson',
        data: pointCollection.default,
      });

      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'points',
      });

      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      setMap(map);
    });

    map.on('move', () => {
      setMapState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const [ lng, lat ] = point.geometry.coordinates;
        const { name, rating } = point.properties;

        const popup = new mapboxgl.Popup({ closeButton: false })
          .setText(`${name}, рейтинг: ${rating}`);

        const marker = new mapboxgl.Marker()
          .setLngLat([ lng, lat ])
          .setPopup(popup)
          .addTo(map);

        point.marker = marker;
      });
    }
    return;
  }, [map, points]);

  return (
    <div className="map">
      <div className="map__left-column">
        <div className="map__header">
          <h1 className="map__title">Список мест</h1>
          <NavLink to="/">
            <button className="button map__back-button">Назад</button>
          </NavLink>
        </div>
        <PointList points={points} onPointClick={handlePointClick} />
      </div>

      <div className="map__right-column" ref={mapContainer}>
        <p className="map__coordinates">Долгота: {mapState.lng} | Широта: {mapState.lat} | Зум: {mapState.zoom}</p>
      </div>
    </div>
  );
}
