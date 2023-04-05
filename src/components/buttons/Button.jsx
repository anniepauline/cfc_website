import Button from '@mui/material/Button';

function Buttons(){
    return (
        <div class = "buttons flex-row">
            <Button variant="contained" size="large"
                 sx={{ width: 120, height:55, padding: 2, textTransform: "capitalize",
                 margin: 0.5, borderRadius:1,backgroundColor: "#FFFFFF",
                 fontWeight:400,fontFamily:"Inter", fontSize:"3.7vw",color:"#070707",
                 ":hover":{color:"#F6F6F6",bgcolor:"#701311"}}}>
                Featured
            </Button>
          <Button variant="contained" size="large"
                sx={{ width: 120, height:55, padding: 2, textTransform: "capitalize",
                margin: 0.5, borderRadius:1,backgroundColor: "#FFFFFF",
                fontWeight:400,fontFamily:"Inter", fontSize:"3.7vw",color:"#070707",
                ":hover":{color:"#F6F6F6",bgcolor:"#701311"}}}>
                Recent
          </Button>
           <Button variant="contained" size="large"
                sx={{ width: 120, height:55, padding: 2,textTransform: "capitalize", 
                margin: 0.5, borderRadius:1,backgroundColor: "#FFFFFF",
                fontWeight:400,fontFamily:"Inter",fontSize:"3.7vw", color:"#070707",
                ":hover":{color:"#F6F6F6",bgcolor:"#701311"}}}>
                Popular
          </Button>
        </div>
    );
}

export default Buttons;