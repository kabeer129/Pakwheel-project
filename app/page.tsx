import React from "react";
import Navbar from "../app/Component/Navbar";
import Section from "./Component/Section";
import Card from "./Component/Card";
import Footer from "./Component/Footer";


export default function App(){
  return(
      <div className="bg-blue-950">
      <Navbar/>
      <Section/>
     <Card/>
     <Footer/>
     
     
     
      </div>
 )
 }