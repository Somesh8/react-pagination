import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/';

class ApiService {

  // getPublicContent() {
  //   return axios.get(API_URL + 'all');
  // }

  getCompanyData() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("Use Token -> ",user.token);
    let AuthStr = "Bearer "+user.token;
    return axios.get(API_URL + 'company/', { headers: { Authorization: AuthStr } });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new ApiService();