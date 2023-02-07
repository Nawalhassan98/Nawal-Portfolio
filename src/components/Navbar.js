import React, {useState, useEffect} from "react"
import "./NavbarStyles.css"
import {Link, useLocation} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"




function Navbar(){
    const [click, setClick]= useState(false);
    
    const location = useLocation(); 
    useEffect(()=>{
        setClick(false);
    },[location]);
    
    function handleClick(){
     setClick(!click);
    }
   
   

  return (
   
    <div className="header">
        <Link to="/">
          <h1 className="title-heading">Nawal Hassan
          <span className="title">(Front-End Developer)</span></h1> 
         
        </Link>
        <ul className={click? "nav-menu active" : "nav-menu"}>
         <li>
            <Link to="/resume"> Resume </Link>
         </li>
         <li>
            <Link to="/projects">Projects </Link>
         </li>
         <li>
            <Link to="/contact">Contact</Link>
         </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
         {click? (<FaTimes size={30} style={{color:"white"}}/> 
         ) : ( <FaBars className="menuicon" size={30} style={{color:'azure'}}/>)
         }
        </div>
    </div>
  )

}

export default Navbar;

