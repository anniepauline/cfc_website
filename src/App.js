import Footer from "./components/footer/Footer.jsx";
import Card from "./components/body/card/Card.jsx";
import Buttons from "./components/body/buttons/Button.jsx";
import Speakers from "./components/body/speakers/Speakers.jsx";
import Header from "./components/header/Header.jsx";
import './app.css';
import {getAuthors,getQas} from "./api.js";
import  { useState,useEffect } from 'react';

function App() {  
  const [author,setAuthors] = useState([]);
  const [qas,setQas] = useState([]);

  useEffect(()=>{
    getAuthors();
    setAuthors(JSON.parse(localStorage.getItem('commons')).data.authors);
    getQas();  
    setQas(JSON.parse(localStorage.getItem('qas')).data);
      },[]);
      console.log(qas);

  return (
    <div className="App">      
      <Header/>
      <div class = "container-fluid mid-section" >
          <Buttons/> 
          <Speakers authors = {author}/>        
          <p class = "para">Questions & Answers</p>
      </div>
      <Card qas = {qas}/>              
      <Footer/>           
    </div>
  );
}
export default App;
