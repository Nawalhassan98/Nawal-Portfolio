import React from "react";
import Navbar from "../components/Navbar"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoSchoolSharp} from "react-icons/io5";
import {IoSchoolOutline} from "react-icons/io5";
import {MdWork, MdWorkOutline} from "react-icons/md"
import Footer from "../components/Footer"
import "./pagesstyles/Resume.css"
import FlipCard from "../components/UI/FlipCard";
import cards from "../components/UI/FlipCardData"
import "../components/UI/FlipCard.css"
import SkillCard from "../components/UI/SkillsCard";
import Skillsdata from "../components/UI/SkillsCardData";


function Resume(){
return (
  <div>
    <div className="verticaltimeline">
    <Navbar/>
    <div>
      <h1 className="heading">Education & Work Experience</h1>
    </div>
    <VerticalTimeline  LineColor="#1C0606">
      <VerticalTimelineElement
         className="vertical-timeline-element--work"
         contentStyle={{background:"white", color: "black" , borderTop:"4px solid #00008B"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         date=" 2020 - current date "
         iconStyle={{background: "#00008B", color: "white"}}
         icon={<MdWork/>}>
          <h3 className="vertical-timeline-element-title">
            Freelancing
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>Working as a freelancer with multiple clients all over the globe</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className="vertical-timeline-element--work"
         contentStyle={{background:"white", color: "black" , borderTop:"4px solid #1E90FF"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         date="June 2019 - August 2019 "
         iconStyle={{background: "#1E90FF", color: "white"}}
         icon={<MdWorkOutline/>}>
          <h3 className="vertical-timeline-element-title">
            Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Fazal Rehman Fabrics LTD, Pakistan</h4>
          <p>Worked in Software & Web Department</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        
         contentStyle={{background: "white", color: "black" , borderTop:"4px solid #9370DB"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         date="2017-2021"
         iconStyle={{background: "#9370DB", color: "white"}}
         icon={<IoSchoolSharp/>}>
          <h3 className="vertical-timeline-element-title">
            Bachelors in Computer Science (BSCS)
          </h3>
          <p>Khawaja Fareed University of Engineering & IT</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
         layout="1-colomn"
         className="vertical-timeline-element--education"
         contentStyle={{background: "white", color: "black" , borderTop:"4px solid #6495ED"}}
         contentArrowStyle={{borderRight: '7px solid white'}}
         date="2014-2016"
         iconStyle={{background: "#6495ED", color: "white"}}
         icon={<IoSchoolOutline/>}>
          <h3 className="vertical-timeline-element-title">ICS (Information And Computer Science, Pakistan)</h3>
          <p>Punjab College Pakistan</p>
         </VerticalTimelineElement>
      </VerticalTimeline>
      </div>

      
      {/* FlipCards */}
    <h1 className="interest">Interests & Hobbies</h1>
    <div className="flipcards">
      {cards.map((card)=>(
        <FlipCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </div>
    
   
    <h1 className="skills">Skills</h1>
    <div className="skillcards">
    {Skillsdata.map((skilldata)=>(
      <SkillCard
        key={skilldata.id}
        icon={skilldata.icon}
        title={skilldata.title}
        desc={skilldata.desc}
      />
    ))}
    </div>
  
    <Footer/>
    </div>

    
)
}

export default Resume;