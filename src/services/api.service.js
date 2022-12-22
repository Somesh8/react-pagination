import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8081/";

class ApiService {

  getTableData(endpoint, pagination=false) {
    let param = new URLSearchParams();
    console.log("URL -> ", pagination);
    var endPt="";
    if (pagination !== null || pagination !== undefined) {
      endPt="pagination?"
      for (var key in pagination) {
        if (pagination.hasOwnProperty(key)) {
          param.append(key, pagination[key]);
          console.log(key + " -> " + pagination[key]);
        }
      }
    }

    fetch(`${API_URL}${endpoint}${endPt}${param.toString()}`, { headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        console.log("ABCD", data);
      });
  }

  getCompanyData() {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log("Use Token -> ",user.token);
    let AuthStr = "Bearer " + user.token;
    let config = {
      headers: {
        "Authorization": AuthStr,
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      }
    }

    return axios.get(API_URL,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          "Authorization": `Bearer ${user.token}`
        }
      })
      .then(response => {
        console.log("AXIOS Data -> ", response.data)
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new ApiService();