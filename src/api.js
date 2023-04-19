import axios from 'axios';

 function getAuthors() {
   axios.get("https://cfc-study-app.adlaiapp.com/apis/commons/",
 {
   headers: {
     'content-type':'application/vnd.api+json',
     'Authorization' : process.env.REACT_APP_APIKEY,
   },
 }).then(response => {
        let data = localStorage.getItem("authors"); 
        if(data)
        {
            localStorage.setItem("authors",JSON.stringify(response.data));
            data = localStorage.getItem("authors");           
          }
        else{
          localStorage.setItem("authors",JSON.stringify(response.data));
          data = localStorage.getItem("authors");           
        }   

 }).catch(error => {
   console.log(error);
 });

}
 export default getAuthors;


// export function getAuthors(){
//   axios.get('https://cfc-study-app.adlaiapp.com/apis/qas/',{
//     headers:{
//       'Content-Type':'application/vnd.api+json',
//       'Authorization' : `${process.env.REACT_APP_APIKEY}`,
//     },
//   }).then(response=>{
//     console.log(response.data)
//   })
//   .catch(error => {
//        console.log(error);
//      });
// }
//localStorage.setItem("authors",JSON.stringify(response.data));