import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {SiReact} from "react-icons/si";
import {FaDog} from "react-icons/fa"
import {BiNotepad} from "react-icons/bi"
import {GiNotebook} from "react-icons/gi"
import {Link} from 'react-router-dom';
import {IoFastFoodSharp} from "react-icons/io5"
import "./pagesstyles/projects.css"


function Projects(){
    return (
        <div >
           <Navbar/>
           <div>
            <h1 className="heading">Projects & Developments</h1>
            <h2 className="heading2">Showcase of my latest works and projects.</h2>
     </div>
    
       <VerticalTimeline  LineColor="#1C0606" style={{zIndex:"-3", position:"fixed"}} >
        <VerticalTimelineElement
         contentStyle={{background:"#F0F8FF", color: "black", borderTop:"4px solid DeepSkyBlue"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         iconStyle={{background: "DeepSkyBlue", color: "white", zIndex:"0", position:"absolute"}}
         icon={<SiReact/>}>
         
          <h3 className="vertical-timeline-element-title" style={{paddingBottom:"1rem"}}>
          React Resume
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{paddingBottom:"1rem", fontWeight:"500"}}>React Project</h4>
          <p style={{ paddingBottom:'1rem' }}>- My resume is developed in React with 100% responsiveness.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
         layout="1-colomn"
         position="right"
         contentStyle={{background: "#FFF0F5", color: "black" , borderTop:"4px solid HotPink"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         iconStyle={{background: "HotPink", color: "white"}}
         icon={<FaDog/>} style={{fontSize:''}}>
          <h3 className="vertical-timeline-element-title" style={{paddingBottom:"1rem"}}>TinDog Website</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{paddingBottom:"0.7rem", fontWeight:"500"}}>React Project</h4>
          <p  style={{ paddingBottom:'1rem' }}>-This is an Amazing website for Dog lovers!
          Designed with 100% responsiveness using HTML5, CSS3, Bootstrap And React!</p>
          <div className="divbutton"><Link to= "https://www.loom.com/share/93442f591ef74cacbbbe714d3897a3b8" target="_blank" className="buttonProject" >View Demo</Link></div>
          
         </VerticalTimelineElement>

        <VerticalTimelineElement
         contentStyle={{background: "#F0F8FF", color: "black", borderTop:"4px solid #6495ED"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         iconStyle={{background: "#6495ED", color: "white" }}
         icon={<IoFastFoodSharp/>}>
          <h3 className="vertical-timeline-element-title" style={{paddingBottom:"1rem"}}>
          Restaurant Food Order App
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{paddingBottom:"0.7rem", fontWeight:"500"}}>React Project</h4>
          <p>- An Awesome Mini Food Order App designed in React.</p>
          <div className="divbutton"><Link to= "https://www.loom.com/share/3c863d0edebb41b699adb5b2d41eed77" target="_blank" className="buttonProject" >View Demo</Link></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
         layout="1-colomn"
         position="right"
         contentStyle={{background: "#FFDEAD", color: "black" , borderTop:"4px solid #FFA500"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         iconStyle={{background: "#FFA500", color: "white"}}
         icon={<BiNotepad/>}>
          <h3 className="vertical-timeline-element-title" style={{paddingBottom:"1rem"}}>To-Do list App</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{paddingBottom:"0.7rem", fontWeight:"500"}}>React Project</h4>
          <p  style={{ paddingBottom:'1rem' }}>-A cute mini Application to keep track of your daily tasks! 
          You can list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.</p>
          <div className="divbutton"><Link to= "https://www.loom.com/share/61bcb34a1ef6486cbdee8338c6d0f3c5" target="_blank" className="buttonProject" >View Demo</Link></div>
         </VerticalTimelineElement>

         <VerticalTimelineElement
         contentStyle={{background: "#F0F8FF", color: "black", borderTop:"4px solid DeepSkyBlue"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         iconStyle={{background: "DeepSkyBlue", color: "white"}}
         icon={<SiReact/>}>
          <h3 className="vertical-timeline-element-title" style={{paddingBottom:"1rem"}}>
          React Fake Code Typing
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{paddingBottom:"0.7rem", fontWeight:"500"}}>React Component</h4>
          <p style={{ paddingBottom:'1rem' }}>A react component to generate fake code typing</p>
          <div className="divbutton"><Link to= "https://www.loom.com/share/a82ebf38fadf454ea608007164a57610" target="_blank" className="buttonProject" >View Demo</Link></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
         layout="1-colomn"
         position="right"
         contentStyle={{background: "#FAF0E6", color: "black" , borderTop:"4px solid #FFD700"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         iconStyle={{background: "#FFD700", color: "white"}}
         icon={<GiNotebook/>}>
          <h3 className="vertical-timeline-element-title" style={{paddingBottom:"1rem"}}>Keeper Notepad Application</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{paddingBottom:"0.7rem", fontWeight:"500"}}>React Project</h4>
          <p style={{ paddingBottom:'1rem' }}>-The Advantage of this Notepad Application is that you have everything written down in one place. Wherever you are, there is no need to worry — all the necessary information on this or that subject is always at hand! </p>
          <div className="divbutton"><Link to= "https://www.loom.com/share/6061f8780ef94955a8b3a60e9fa22c5f" target="_blank" className="buttonProject" >View Demo</Link></div>
         </VerticalTimelineElement>
       </VerticalTimeline>
      
          <div style={{marginBottom:"6rem"}}></div>
           <Footer/>
        </div>
    )
}
    


export default Projects;