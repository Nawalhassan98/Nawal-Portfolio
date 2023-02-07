import React from "react"
import { FaPhone,FaMailBulk, FaLinkedin} from "react-icons/fa";
import "./Footer.css";

function Footer(){
 return(
    
 
    <div className="footer">
    <div className="footer-container">
     <div className="left"> 
       <div className="phone">
       <h2>Phone</h2>
        <h4><FaPhone size={20} style={{color:"white", marginRight:'2rem'}}/>
         647-832-7204</h4>
       </div>
     </div>
     <div className="center">
     <div className="email">
        <h2>Email</h2>
        
        <a href="https://www.gmail.com/" target="_blank">
        <h4 style={{color:"white"}}>
        <FaMailBulk size={20} style={{color:"white", marginRight:'2rem'}}/>
         nawalhassan890@gmail.com</h4>
         </a>
       </div>
     </div>
     <div className="right" >
        <div className="social" >
            <h2>Social</h2>
            <h4>
           <a href="https://www.linkedin.com/in/nawal-h-2446211b2/" target="_blank">
            <FaLinkedin size={30} style={{color:"white", marginRight:'1rem'}} />
            </a>
            </h4>
        </div>
     </div>
     </div>
   </div> 
 )
}

export default Footer;