import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-3 text-center">
      <div className="row mx-auto " style={{ width: "750px", height: "auto" }}>
        
        
          <img src="media/homeHero.png" alt="Hero Home" />
          <h1
            className="landing-heading text-center mt-5 mb-2 "
            style={{ color:"black", fontSize: "27px" }}
          >
            Invest in everything
          </h1>
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className=" btn btn-primary mx-auto"
            style={{ width: "28%", height:"45px",margin: "0-auto" }}
          >
            SignUp Now
          </button>
     
        
      </div>
    </div>
  );
}

export default Hero;
