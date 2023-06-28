import axios from 'axios'

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://127.0.0.1:8000/api/'

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

  export function getRequest(URL,token=null) {
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axiosClient.get(`/${URL}`,{headers}).then(response => response);
  }
  
  export function postRequest(URL, payload,token=null) {
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axiosClient.post(`/${URL}`, payload).then(response => response);
  }
  
  export function patchRequest(URL, payload,token=null) {
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
  }
  
  export function deleteRequest(URL,token=null) {
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axiosClient.delete(`/${URL}`).then(response => response);

  }