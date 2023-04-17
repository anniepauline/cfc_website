import Footer from "./components/footer/Footer.jsx";
import Card from "./components/card/Card.jsx";
import Buttons from "./components/buttons/Button.jsx";
import Speakers from "./components/speakers/Speakers.jsx";
import { ReactComponent as Line } from "./icons/Line.svg";
import './app.css';

function App() {   
  return (
    <div className="App">      
      <div class ="top">
        <div id = "title">
          <p >Zac Poonen</p>
          <p >ANSWERS</p>
          <Line id = "line"/>
          <p class = "p-desc">Listen to Zac Poonen’s answers to over 600 questions, which is a treasure house of wisdom.</p>
        </div>
        <img src = "https://www.cfcindia.com/resources/en/images/app/br-zac-right-card.png" alt = "main-img"/>
      </div>
      <div class = "container container-fluid">
          <Buttons/>        
          <Speakers/>        
          <p class = "para">Questions & Answers</p>
      </div>
      <Card/>         
      <Card/>     
      <Card/> 
