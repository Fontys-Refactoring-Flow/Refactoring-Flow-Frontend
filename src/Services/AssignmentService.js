import axios from "axios";

const CHALLENGE_API_BASE_URL = "http://localhost:8080/api/v1/challenge";

class AssignmentService{

    getChallenges(){
        return axios.get(CHALLENGE_API_BASE_URL);
    }

    getChallengeById(challengeid){
        console.log(challengeid);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + challengeid);
    }
}

export default new AssignmentService()