export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log("Use Token -> ",user.token);
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
    //   return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }