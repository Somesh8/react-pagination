import axios from "axios";

const API_URL = "http://localhost:8081/api/v1/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        console.log("Data -> ",response.data)
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    console.log("User -> ", user);
    return axios.post(API_URL + "register", user );
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();