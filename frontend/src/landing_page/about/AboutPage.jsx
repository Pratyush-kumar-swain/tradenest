import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

import Team from "./Team";
import Hero from "./Hero";


function AboutPage(){

    return(
        <div>
          
            <Hero></Hero>
            <Team></Team>
            <OpenAccount></OpenAccount>
        
        </div>
    )
}

export default AboutPage;