import   './card.css';
import * as React from 'react';
//import Avatar from '@mui/material/Avatar';
// import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import  { ReactComponent as Zac } from '../../images/zac-tmbnl.svg';

function Card()
{
    return (
        // <div>
        //     <hr/>           
        //         <div class = "top-header">
        //             <div class = "image">                    
        //                 <Zac/>                                      
        //             </div>
        //             <div class = "author">
        //                 <p>By Zac Poonen</p>
        //             </div>
        //         </div>
        //         <div class = "title-header">
        //             <div>
        //                 <h1>01.The Origin Of Evil</h1>
        //             </div>
        //             <div >
        //                 <h1>Q&A</h1>
        //             </div>
        //             <div><p>5 min</p></div>
        //         </div>
              
        //     <hr/>
        // </div>

        //outer div 
        <div class = " card container-fluid d-flex flex-row p-0">

           {/* inner div(use fluex for ...) */}
            <div class = "i-div ">                   
                    {/* author and thumbnail needs fixing*/}
                <div class = " ii-div d-flex flex-row">
                     <div class = "image pr-1">                    
                         <Zac/>                                      
                     </div>
                     <div class = "author">
                         <p class = "text-grey-200">By Zac Poonen</p>
                     </div>
                 </div>

                    {/* div after the author */}
                 <div class = "title-header">
                    <div class = "title">
                        <h1>01.The Origin Of Evil</h1>
                    </div>
                    <div class = "head-qna">
                         <h1 class="text-secondary">Q&A</h1>
                         <span class = "time">5 min</span>
                     </div>                   
                 </div>

            </div>
            {/* dots come here */}
            <div class = "dots">
                <div >
                <p>...</p>
                </div>
                
            </div>
        </div>




    );
}

export default Card;