import Avatar from '@mui/material/Avatar';
import './speakers.css';


function Speakers(props)
{    
    function setBgColor(color)
    {   
        switch((color))
        {
        case "green":
            color = '#CCBD8A';
            break;
        
        case "red":
            color = '#F9B081';
            break;
        case "blue":
            color = '#D3D3D3';
            break;
        }
        return color;

    } 
         
    return (
        <div>
            <span>
            <p class = "para">Other Speakers</p>
          </span>  
        <div class = "speaker">  
         {props.authors.slice(1).map(((obj,index)=>{return ( <div class = "img d-flex flex-column" key = {index}>
                <Avatar
                    alt="Annie poonen"
                    src={obj.image_url}
                    sx={{ width:'32vw', height:'32vw',bgcolor:setBgColor(obj.theme) ,borderRadius:2,marginRight:2,}} variant="square"
                />
                <span className = "caption " href="#" aria-current="page">{obj.name}</span> 
            </div>); }))} 
        </div>
        </div>
    );
}

export default Speakers;