import React from "react";
import "./HomeBgImg.css";
import bgimg from "../images/bgimg.jpeg"
import {Link} from 'react-router-dom'

function HomeBgImg(){
    return(
      <div className="homebg">
        <div className="mask">
         <img className="intro-img" src={bgimg} width="1000" height="300" alt="codergirl"/>
        </div>
        <div className="content">
            <h1>Hello! </h1>
            <h2>I'm Nawal Hassan,</h2>
            <h3> A Passionate Front-End web developer with a passion for learning and creating.  </h3>
            
            <Link to="/resume" className="btnlink">Resume</Link>
            <Link to="/projects" className="btnlink">Projects</Link>
            <Link to="/contact" className="btnlink">Contact</Link>
            
        </div>
      </div>
    )
}

export default HomeBgImg;

