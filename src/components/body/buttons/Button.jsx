import Button from '@mui/material/Button';
import './button.css';

function Buttons(){
    return (
        <div class = "buttons flex-row">
            <Button variant="outlined" size="large"
                 sx={{ width: '14vh', height:'6vh', padding: 2, textTransform: "capitalize",
                 margin: 0.5, borderRadius:1,backgroundColor: "#FFFFFF",borderColor:" #C4C4C4",
                 fontWeight:400,fontFamily:"Inter", fontSize:"2vh",color:"#070707",
                 ":hover":{color:"#F6F6F6",bgcolor:"#701311",borderColor:"#C4C4C4"}}}>
                Featured
            </Button>
            <Button variant="outlined" size="large"
                  sx={{ width:'14vh', height:'6vh', padding: 2, textTransform: "capitalize",
                  margin: 0.5, borderRadius:1,backgroundColor: "#FFFFFF",borderColor:" #C4C4C4",
                  fontWeight:400,fontFamily:"Inter", fontSize:"2vh",color:"#070707",
                  ":hover":{color:"#F6F6F6",bgcolor:"#701311",borderColor:"#C4C4C4"}}}>
                  Recent
            </Button>
           <Button variant="outlined" size="large"
                sx={{ width: '14vh', height:'6vh', padding: 2,textTransform: "capitalize", 
                margin: 0.5, borderRadius:1,backgroundColor: "#FFFFFF",borderColor:" #C4C4C4",
                fontWeight:400,fontFamily:"Inter",fontSize:"2vh", color:"#070707",
                ":hover":{color:"#F6F6F6",bgcolor:"#701311",borderColor:"#C4C4C4"}}}>
                Popular
          </Button>
        
          {/* <Button variant="outlined">Primary</Button> */}
        </div>
    );
}

export default Buttons;