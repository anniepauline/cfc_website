import   './content.css';
function Content(props)
{
    
    //console.log(props)
    return (
        <div class = "details">
            <div class = "title">
                <h1 class = "mb-1">{props.title}</h1>
            </div>
            <div class = "category pt-0">
                <h1 class="text-secondary pb-0 mb-1">Q&A</h1>
                 <span class = "time">{props.time}</span>
            </div>                   
        </div>
    );
}
export default Content;