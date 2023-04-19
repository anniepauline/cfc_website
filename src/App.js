import Footer from "./components/footer/Footer.jsx";
import Card from "./components/body/card/Card.jsx";
import Buttons from "./components/body/buttons/Button.jsx";
import Speakers from "./components/body/speakers/Speakers.jsx";
import Header from "./components/header/Header.jsx";
import './app.css';

function App() {  

  

  return (
    <div className="App">      
      <Header/>
      <div class = "container-fluid mid-section" >
          <Buttons/>        
          <Speakers/>        
          <p class = "para">Questions & Answers</p>
      </div>
      <Card/>         
      <Card/>     
      <Card/>   
      <Footer/>           
    </div>
  );
}
export default App;
