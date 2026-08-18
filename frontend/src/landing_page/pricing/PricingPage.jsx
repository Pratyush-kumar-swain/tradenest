import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

import Hero from "./Hero";
import Brokerage from "./Brokerage";

function PricingPage(){
    return(
        <div>
            
            <Hero></Hero>
            <Brokerage></Brokerage>
            <OpenAccount></OpenAccount>
          
        </div>
    );
}

export default PricingPage;