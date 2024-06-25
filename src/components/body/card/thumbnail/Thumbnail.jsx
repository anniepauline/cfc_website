import   './thumbnail.css'; 
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

function Thumbnail(props){
    return (
                <div class = " wrapper d-flex flex-row">
                          
                     <Avatar
                          alt="Remy Sharp"
                          src={props.thumbnail}
                          sx={{ width:"4vw", height: "4vw" }}
                        />             
                    
                     <div class = "author">
                         <p>By {props.author}</p>
                     </div>
                 </div>)                
                 }

export default Thumbnail;