import Avatar from '@mui/material/Avatar';
import './speakers.css';
import getAuthors from "../../../api.js";
import React, { useState,useEffect } from 'react';

function Speakers()
{     
      const [author,setAuthors] = useState([]);

       useEffect(()=>{
        getAuthors();
        setAuthors(JSON.parse(localStorage.getItem('authors')));
           },[]);
       
    return (
        <div>
            <span>
            <p class = "para">Other Speakers</p>
          </span>  
        <div class = "speaker">  
            <div class = "img d-flex flex-column">
                <Avatar
                    alt="Remy Sharp"
                    src="https://www.cfcindia.com/resources/en/images/app/sis-anne-card.png"
                    sx={{ width:'32vw', height:'32vw',bgcolor:"#CCBD8A" ,borderRadius:2,marginRight:2,}} variant="square"
                />
                <span className = "caption " href="#" aria-current="page">Annie Poonen</span> 
            </div>
           
            {}
            {/* <div class = "img d-flex flex-column">
                <Avatar
                    alt="Remy Sharp"
                    src="https://www.cfcindia.com/resources/en/images/app/br-santosh-card.png"
                    sx={{ width: '32vw', height: '32vw',bgcolor:"#F9B081" ,borderRadius:2,marginRight:2,}} variant="square"
                />
                <span className = "caption " href="#" aria-current="page">Santosh Poonen</span> 
            </div>

            <div class = "img d-flex flex-column">
                <Avatar
                    alt="Remy Sharp"
                    src="https://www.cfcindia.com/resources/en/images/app/br-sandeep-card.png"
                    sx={{ width: '32vw', height: '32vw',bgcolor:"#D3D3D3" ,borderRadius:2,marginRight:2,}} variant="square"
                />
                <span className = "caption " href="#" aria-current="page">Sandeep Poonen</span> 
            </div> */}
        </div>
        </div>
    );
}

export default Speakers;