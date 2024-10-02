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

// Define the props interface for the OpenLayersMap component
interface OpenLayersMapProps {
  latitude: number | null;  // Latitude of the IP address location
  longitude: number | null; // Longitude of the IP address location
}

const OpenLayersMap: React.FC<OpenLayersMapProps> = ({ latitude, longitude }) => {
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
        center: fromLonLat([longitude !== null ? longitude : -74.5, latitude !== null ? latitude : 40]), // Center of the map [longitude, latitude]
        zoom: 13, // Initial zoom level
      }),
    });

    // Create a marker if latitude and longitude are available
    if (latitude !== null && longitude !== null) {
      const marker = new Feature({
        geometry: new Point(fromLonLat([longitude, latitude])), // Coordinates of the marker
      });

      // Style for the marker
      marker.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 0.5],
            src: 'https://openlayers.org/en/latest/examples/data/icon.png', // URL for the marker icon
          }),
        })
      );

      // Add the marker to the vector source
      vectorSource.addFeature(marker);
    }

    // Clean up the map when the component is unmounted
    return () => map.setTarget(undefined);
  }, [latitude, longitude]); // Re-run effect when latitude or longitude changes

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
