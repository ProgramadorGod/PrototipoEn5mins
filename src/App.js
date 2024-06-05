import logo from './logo.svg';
import './App.css';
import logounipaz from "./media/logounipaz-nobg3.png"
import Home from './Home';


function App() {
  return (
    <div className="App">
      <div id="navbar">

        <div id="textnavbar">
          <img src={logounipaz} id="logounipaz"></img>
          <div id="navtext">
            Laboratorio Virtual Supremo
          </div>
        </div>

      </div>


      <div>
        <Home/>
      </div>


    </div>
  );
}

export default App;
