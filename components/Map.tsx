// components/Map.tsx
"use client";
import { useEffect } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';

const OpenLayersMap = () => {
  useEffect(() => {
    // Create a vector source for markers
    const vectorSource = new VectorSource();

    // Create a vector layer for the marker
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Initialize the map
    const map = new Map({
      target: 'map', // The HTML element ID where the map will be rendered
      layers: [
        new TileLayer({
          source: new OSM(), // Using OpenStreetMap as the base layer
        }),
        vectorLayer, // Add the vector layer here
      ],
      view: new View({
        center: fromLonLat([-74.5, 40]), // Center of the map [longitude, latitude]
        zoom: 9, // Initial zoom level
      }),
    });

    // Create a marker
    const marker = new Feature({
      geometry: new Point(fromLonLat([-74.5, 40])), // Coordinates of the marker
    });

    // Style for the marker
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'https://openlayers.org/en/latest/examples/data/icon.png', // URL for the marker icon
        }),
      })
    );

    // Add the marker to the vector source
    vectorSource.addFeature(marker);

    // Clean up the map when the component is unmounted
    return () => map.setTarget(undefined);
  }, []);

  return (
    <div
      id="map"
      style={{
        position: 'absolute', // Position absolutely
        bottom: '0', // Adjust top position
        left: '0', // Adjust left position
        width: '100%', // Full width of the parent
        height: '100%', // Full height of the parent
        zIndex: '-1', // Ensure the map is above other elements
      }}
    />
  );
};

export default OpenLayersMap;
