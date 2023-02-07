import React from "react";
import Navbar from "../components/Navbar"
import Form from "./Form"
import Footer from "../components/Footer"
import "./pagesstyles/contact.css"

function Contact(){
   
    return (
        <div>
        <Navbar/>
        <div className="circle">
        <div className="headingcontact">
         <h1>Contact Me</h1>
         <p> Looking Forward to hearing from you!</p>
         <h2>Email: </h2>
         <h3>nawalhassan890@gmail.com</h3>
        </div>
        </div>
        <Form />
        <Footer/>
        </div>
    )
    
}

export default Contact;