import React from "react";
import GoogleMapReact from "google-map-react";

const SimpleMap = () => {
  const mapOptions = {
    center: { lat: 41.8781, lng: -87.6298 },
    zoom: 14,
  };

  return (
    <div
      style={{
        height: "300px",
        width: "484px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Замініть на свій ключ API
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      >
        {/* Тут ви можете додавати маркери чи інші елементи на карту */}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
