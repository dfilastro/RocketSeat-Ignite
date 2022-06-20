import axios from 'axios';

const city = axios.create({
  baseURL: 'http://localhost:4000/continent/',
});

export default city;
