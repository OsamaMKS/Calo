import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import DeliveryCard from "./DeliveryCard";

const containerStyle = {
  width: "100%",
  height: window.screen.height * 0.6,
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MapView(props) {
  const [selectedPin, setSelectedPin] = useState(undefined);

  const card = false;

  const handleSelectedPin = (e) => {
    setSelectedPin(e);
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyCnnVbFkjaLxtK2gFVTV6T7fvdtX8Ywt8M">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
          {props.pins.map((delivery) => (
            <>
              <Marker
                key={delivery.id}
                position={{ lat: delivery.lat, lng: delivery.lng }}
                title={delivery.address}
                onClick={() => handleSelectedPin(delivery)}
              />
            </>
          ))}
        </GoogleMap>
      </LoadScript>
      {selectedPin !== undefined && (
        <div className=" col-6">
          <div className=" card align-text-center ">
            <DeliveryCard
              pin={props.pins.find((pin) => pin.id === selectedPin.id)}
              status={card}
              handleChangeToDelivering={props.handleChangeToDelivering}
              handleChaneToDelivered={props.handleChaneToDelivered}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MapView;
