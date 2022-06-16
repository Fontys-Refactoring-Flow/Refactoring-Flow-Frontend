import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";

class UserService{
    
    getLogin(email, password){
        return axios.get(USER_API_BASE_URL + "/login/" + email + "/" + password);
    }
}

export default new UserService()