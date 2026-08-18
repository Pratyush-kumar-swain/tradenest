import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-3" style={{color:"black"}}>Unbeatable pricing</h1>
          <p className="text-muted mb-1">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6  mb-5 mt-3">
          <div className="row text-center">
            <div className="col p-1 border">
              <h1 className="mb-3 fs-2" style={{color:"black"}}>₹0</h1>
              <p className="text-muted mb-3">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-1 border">
              <h1 className="mb-3 fs-2" style={{color:"black"}}>₹20</h1>
              <p className="text-muted mb-3">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
