import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const RequestMap = (props) => {
  const containerStyle = {
    width: "100%",
    height: "350px",
  };

  const center = {
    lat: props.cor2,
    lng: props.cor1,
  };
  console.log(center);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC0DAY6icgU72UFnbUQQ7aiBeFge3ZEtMs",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(RequestMap);
