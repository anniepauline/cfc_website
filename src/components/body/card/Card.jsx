import   './card.css';
import * as React from 'react';
import Thumbnail from './thumbnail/Thumbnail.jsx';
import Content from './content/Content.jsx';
import Dots from './dots/Dots.jsx';
//import Avatar from '@mui/material/Avatar';
// import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

function Card(props)
{
    
    return (

    <div class = "card-container p-0">        
        <div class = " card container-fluid d-flex flex-row rounded-0 border border-1 border-bottom-0 p-0">
            <div class = "card-item ">                   
                <Thumbnail 
                    author={props.author}
                    thumbnail = {props.image}
                    theme = {props.theme}
                    image = {props.image}/>                    
                <Content   
                  key = {props.key} 
                  title={props.title}
                  time = {props.time}/>
            </div>
            <Dots/>
        </div>
    </div>
    );
}
export default Card;