import React from "react";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";



function HomePage(){

    return (
        <>
        
       
         <Hero></Hero>
         <Awards></Awards>
         <Stats></Stats>
         <Pricing></Pricing>
         <Education></Education>
         <OpenAccount></OpenAccount>
         
        </>
    )
}

export default HomePage;