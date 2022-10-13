import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/student";

class StudentService{
    getLogin(email: string, password: string){
        return axios.get(STUDENT_API_BASE_URL + "/login/" + email + "/" + password);
    }
}

export default new StudentService()