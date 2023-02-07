import React from "react"
import "./FlipCard.css"



function FlipCard(props){
    return (
<div>
 <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
       <div className="icon">{props.icon}</div>
       <div className="title">{props.title}</div>
    </div>
    <div className="flip-card-back">
      <div className="description">{props.desc}</div>
    </div>
  </div>
 </div>
</div>

    )
}

export default FlipCard;


