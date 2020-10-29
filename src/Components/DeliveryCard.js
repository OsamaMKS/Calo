import React from "react";

function DeliveryCard(e) {
  const getButtonText = () => {
    if (e.pin.deliveryStatus === "delivering") {
      return " Change to Delivered";
    } else if (e.pin.deliveryStatus === "delivered") {
      return "Delivered";
    } else {
      return "Change to Delivering";
    }
  };

  return (
    <>
      {e.pin ? (
        <div className="card-body">
          <h6 className="card-title">{e.pin.name}</h6>
          <h6 className="card-text">{e.pin.address}</h6>
          {e.pin.deliveryStatus === "delivering" ? (
            <button
              className="btn btn-outline-success"
              onClick={() =>
                e.pin.deliveryStatus === "delivering"
                  ? e.handleChaneToDelivered(e.pin)
                  : e.handleChangeToDelivering(e.pin)
              }
              disabled={e.pin.deliveryStatus === "delivered"}
            >
              {getButtonText()}
            </button>
          ) : (
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                e.pin.deliveryStatus === "delivering"
                  ? e.handleChaneToDelivered(e.pin)
                  : e.handleChangeToDelivering(e.pin)
              }
              disabled={e.pin.deliveryStatus === "delivered"}
            >
              {getButtonText()}
            </button>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default DeliveryCard;
