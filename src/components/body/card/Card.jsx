import   './card.css';
import * as React from 'react';
import Thumbnail from './thumbnail/Thumbnail.jsx';
import Content from './content/Content.jsx';
import Dots from './dots/Dots.jsx';
//import Avatar from '@mui/material/Avatar';
// import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

function Card(props)
{
    
        function zac()
        {
        const dat = props.qas;
        const zacResult = dat.filter(data=> { return data.attributes.author.name ==="Zac Poonen"}) ;
        return(zacResult);
         }
        
    
    return (

    <div class = "card-container p-0">        
        <div class = " card container-fluid d-flex flex-row rounded-0 border border-1 border-bottom-0 p-0">
            <div class = "card-item ">                   
                <Thumbnail/>                    
                <Content/>
            </div>
            <Dots/>
        </div>
    </div>
    );
}
export default Card;