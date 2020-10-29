import React, { useState } from "react";

import Header from "./Header";
import deliveryList from "../data";
import MapView from "./MapView";
import ListView from "./ListView";

function MainPage() {
  const [filter, setFilter] = useState("delivering");

  const [deliveryStatus, setDeliveryStatus] = useState(deliveryList);

  const [open, setOpen] = useState(false);

  const handleChangeToDelivering = (currentDelivery) => {
    setDeliveryStatus(
      deliveryStatus.map((del) => {
        if (del.id === currentDelivery.id) {
          return { ...currentDelivery, deliveryStatus: "delivering" };
        } else {
          return del;
        }
      })
    );
  };

  const handleChaneToDelivered = (currentDelivery) => {
    setDeliveryStatus(
      deliveryStatus.map((del) => {
        if (del.id === currentDelivery.id) {
          return { ...currentDelivery, deliveryStatus: "delivered" };
        } else {
          return del;
        }
      })
    );
  };

  const getFilteredList = () => {
    if (filter === "delivered") {
      return deliveryStatus.filter((del) => del.deliveryStatus === "delivered");
    } else {
      return deliveryStatus.filter((del) => del.deliveryStatus !== "delivered");
    }
  };

  const handleDelivered = () => {
    setFilter("delivered");
  };

  const handleDelivering = () => {
    setFilter("delivering");
  };

  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Header
        handleClick={handleClick}
        handleDelivering={handleDelivering}
        handleDelivered={handleDelivered}
        open={open}
        filter={filter}
      />

      <div className="container">
        {open === true ? (
          <div>
            <ListView
              cards={getFilteredList()}
              handleChangeToDelivering={handleChangeToDelivering}
              handleChaneToDelivered={handleChaneToDelivered}
            />
          </div>
        ) : (
          <div>
            <MapView
              pins={getFilteredList()}
              handleChangeToDelivering={handleChangeToDelivering}
              handleChaneToDelivered={handleChaneToDelivered}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MainPage;
