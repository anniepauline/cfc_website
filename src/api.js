import axios from 'axios';

var response = axios.get("https://cfc-study-app.adlaiapp.com/apis/qas/",
{
  headers: {
    'content-type':'application/vnd.api+json',
    'Authorization' : 'Token c9915b1890ea06a2cb1fb33d79fe745722e1db97',
  },

}).then(response => {
  console.log(response.data)
 
}).catch(error => {
  console.log(error);
});

export default response;