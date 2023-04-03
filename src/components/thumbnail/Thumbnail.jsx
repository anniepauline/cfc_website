import   './thumbnail.css'; 
import  { ReactComponent as Zac } from '../../images/zac-tmbnl.svg';

function Thumbnail(){
    return (
                <div class = " wrapper d-flex flex-row">
                     <div class = "image pr-2">                    
                         <Zac/>                                      
                     </div>
                     <div class = "author">
                         <p class = "text-grey-200">By Zac Poonen</p>
                     </div>
                 </div>)                
                 }

export default Thumbnail;