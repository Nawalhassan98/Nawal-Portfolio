
import React, { useState } from "react";
import "./Button.css"


function Button(props){

const [isMouseOver, setMouseOver]= useState(false);

function checkMouseOver(){
    setMouseOver(true);
}

function checkMouseOut(){
 setMouseOver(false);
}
  return (
    <div style={{display:'flex', justifyContent:"center"}}>
    <button className="button" style={{backgroundColor: isMouseOver? "aliceblue": "#9370DB" }}
    onMouseOver={checkMouseOver}
    onMouseOut={checkMouseOut}
    >
     {props.children}
    </button>
    </div>
  )

}

export default Button;