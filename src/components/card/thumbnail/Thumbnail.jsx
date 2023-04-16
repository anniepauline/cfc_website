import   './thumbnail.css'; 
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

function Thumbnail(){
    return (
                <div class = " wrapper d-flex flex-row">
                          
                     <Avatar
                          alt="Remy Sharp"
                          src="https://www.cfcindia.com/resources/en/images/app/br-zac-right-thumbnail.png"
                          sx={{ width:"4vw", height: "4vw" }}
                        />             
                    
                     <div class = "author">
                         <p>By Zac Poonen</p>
                     </div>
                 </div>)                
                 }

export default Thumbnail;