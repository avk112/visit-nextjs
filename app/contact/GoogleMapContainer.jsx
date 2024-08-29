"use client";

import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import loadingGif from "../../image/uploading-dial.gif";
import pinImg from "../../image/location-pin.png";
import classes from "./ContactPage.module.css";
import Image from "next/image";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const center = {
  lat: 25.762912954293437,
  lng: -80.19718929751522,
};

function GoogleMapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCcelRhYBbi2WXuwU6-M5hs1cFTqrFjzlo",
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    //
    // setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker
          position={center}
          icon={pinImg}
          label={{ className: classes.markerLabel, text: "We are here!", color: "white" }}
          title="We are here!"
        />
      </>
    </GoogleMap>
  ) : (
    <Image src={loadingGif} alt="google map image" />
  );
}

export default React.memo(GoogleMapContainer);
