import axios from "axios";

const CHALLENGE_API_BASE_URL = "";

class ChallengeService{

    getChallenges(){
        return axios.get(CHALLENGE_API_BASE_URL);
    }
}

export default new ChallengeService()