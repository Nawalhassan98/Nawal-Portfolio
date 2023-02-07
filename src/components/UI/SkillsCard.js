import React from "react"
import "./SkillsCard.css"

function SkillCard(props){
    return (
<div>
 <div className="skill-card">
  <div className="skill-card-inner">
    <div className="skill-card-front">
       <div className="skillicon">{props.icon}</div>
       <div className="skilltitle">{props.title}</div>
       <div className="skilldescription">{props.desc}</div>
    </div>
  </div>
 </div>
</div>

    )
}

export default SkillCard;