import React from 'react'
import './App.css';
import dibujo from "./media/descarga.jpeg";
import Card from './Card';
import lab from "./media/labimg.jpeg"
import lab2 from "./media/microscopio.jpeg"

const Home = () => {
  return (
    <div id='homecontainer'>
      <div>
        <Card imagen={dibujo} text={"Laborotorio Diseño"} />
        <Card imagen={lab} text={"Foto De Los Estudiantes De Unipaz"} />
        <Card imagen={lab2} text={"Microscopio"} />
        <Card imagen={dibujo} text={"Laborotorio Diseño"} />
        <Card imagen={dibujo} text={"Laborotorio Diseño"} />

      </div>
    </div>
  )
}

export default Home
