import axios from 'axios';

 export function getAuthors() {
   axios.get("https://cfc-study-app.adlaiapp.com/apis/commons/",
 {
   headers: {
     'content-type':'application/vnd.api+json',
     'Authorization' : process.env.REACT_APP_APIKEY,
   },
 }).then(response => {
        let data = localStorage.getItem("commons"); 
        if(data)
        {
            localStorage.setItem("commons",JSON.stringify(response.data));
            data = localStorage.getItem("commons");  
            return data;         
          }
        else{
          localStorage.setItem("commons",JSON.stringify(response.data));
          data = localStorage.getItem("commons");  
          return data;         
        }   

 }).catch(error => {
   console.log(error);
 });
}

export function getQas()
{
  axios.get("https://cfc-study-app.adlaiapp.com/apis/qas/",
 {
   headers: {
     'content-type':'application/vnd.api+json',
     'Authorization' : process.env.REACT_APP_APIKEY,
   },
 }).then(response => {
        let data = localStorage.getItem("qas"); 
        if(data)
        {  
            localStorage.setItem("qas",JSON.stringify(response.data));
            data = localStorage.getItem("qas");   
            //return data;        
          }
        else{
          localStorage.setItem("qas",JSON.stringify(response.data));
          data = localStorage.getItem("qas");   
          //return data;        
        }   

 }).catch(error => {
   console.log(error);
 });
}


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