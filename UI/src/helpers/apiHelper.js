import axios from 'axios';

const baseURL = `http://localhost:3000/app/`;

export async function post(url, data) {
  let options = {
    data,
    baseURL,
    url,
    method: 'post',
    responseType: 'json'
  };
  return axios(options);
}

export async function get(url) {
  let options = {
    baseURL,
    url,
    method: 'get',
    responseType: 'json'
  };
  return axios(options);
}


