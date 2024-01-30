import React, { useEffect } from "react";

const GoogleMaps = () => {
  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDU7nccS5aOHCfU7HwSyboVVW-yp92nDe4&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        initMap();
      };
    };

    const initMap = () => {
      const mapOptions = {
        center: { lat: -22.750662148057195, lng: -43.39674977633698 },
        zoom: 15,
      };

      const map = new window.google.maps.Map(
        document.getElementById("map")!,
        mapOptions
      );

      new window.google.maps.Marker({
        position: { lat: -22.750662148057195, lng: -43.39674977633698 },
        map: map,
        title: "Local do Marcador",
      });
    };

    loadMap();
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default GoogleMaps;
