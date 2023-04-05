import Footer from "./components/footer/Footer.jsx";
import Card from "./components/card/Card.jsx";
import Buttons from "./components/buttons/Button.jsx";
import Avatar from '@mui/material/Avatar';
import './app.css';

function App() {   
  return (
    <div className="App">    
        <div class = "container-fluid">
          <Buttons/>
          <p>Other Speakers</p>
          <div class = "img d-flex">
          <Avatar
              alt="Remy Sharp"
              src="https://www.cfcindia.com/resources/en/images/app/sis-anne-card.png"
              sx={{ width: 155, height: 155,bgcolor:"#CCBD8A" ,borderRadius:2,marginRight:1,}} variant="square"
          />
          <Avatar
              alt="Remy Sharp"
              src="https://www.cfcindia.com/resources/en/images/app/br-santosh-card.png"
              sx={{ width: 155, height: 155,bgcolor:"#F9B081" ,borderRadius:2,marginRight:1,}} variant="square"
          />
          <Avatar
              alt="Remy Sharp"
              src="https://www.cfcindia.com/resources/en/images/app/br-sandeep-card.png"
              sx={{ width: 155, height: 155,bgcolor:"#D3D3D3" ,borderRadius:2,marginRight:1,}} variant="square"
          />
          </div>
          <p>Questions & Answers</p>
        </div>
        <Card/>         
        <Card/>     
        <Card/>   
        <Footer/>           
    </div>
  );
}

export default App;
