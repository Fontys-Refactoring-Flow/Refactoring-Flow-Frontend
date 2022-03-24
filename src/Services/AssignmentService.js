import axios from "axios";

const CHALLENGE_API_BASE_URL = "http://localhost:8080/api/v1/challenge";

class AssignmentService{

    getChallenges(){
        return axios.get(CHALLENGE_API_BASE_URL);
    }
}

export default new AssignmentService()