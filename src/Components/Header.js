import React from "react";

function Header({
  handleClick,
  handleDelivering,
  handleDelivered,
  open,
  filter,
}) {
  return (
    <div>
      <nav className="navbar navbar-light dark">
        {open === false ? (
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleClick}
          >
            <span style={{ fontSize: "20px" }}>List</span>
          </button>
        ) : (
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleClick}
          >
            <span style={{ fontSize: "20px" }}>Map</span>
          </button>
        )}
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <button className="btn btn-primary active" onClick={handleDelivering}>
            <span type="button" checked={filter === "delivering"}>
              New
            </span>
          </button>

          <button className="btn btn-primary active">
            <span
              type="button"
              checked={filter === "delivered"}
              onClick={handleDelivered}
            >
              Delivered
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Header;
