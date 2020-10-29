import React from "react";
import DeliveryCard from "./DeliveryCard";

function ListView(e) {
  return (
    <div>
      {e.cards.map((cardInf) => (
        <div className="row col-6" style={{ display: "inline-block" }}>
          <div className="col-bg-5">
            <div className="card text-center ">
              <DeliveryCard
                pin={cardInf}
                handleChangeToDelivering={e.handleChangeToDelivering}
                handleChaneToDelivered={e.handleChaneToDelivered}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListView;
