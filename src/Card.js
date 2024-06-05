import React from 'react'
import "./App.css";

const Card = ({imagen,text}) => {

  return (
    <div id='CardContainer'>
      <img src={imagen} id='imagen'></img>
      <p id='Cardtext'>
        {text}
      </p>
    </div>
  )
}

export default Card
