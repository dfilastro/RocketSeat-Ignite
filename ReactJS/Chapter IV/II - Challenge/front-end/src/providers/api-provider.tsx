import api from '../services/api.js';
import city from '../services/city-api';

api.get('/').then((res) => {
  console.log(res.data);
});

city.get('/continent').then((res) => {
  console.log(res.data);
});

// function getData(continent) {

//     api.get(`${continent}`).then((response) => {
//     console.log(response);
//   });
// }
