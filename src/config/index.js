import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://servicer-api.herokuapp.com'
});
