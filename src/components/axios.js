import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5001/clone-84db7/us-central1/api',
});

export default instance;