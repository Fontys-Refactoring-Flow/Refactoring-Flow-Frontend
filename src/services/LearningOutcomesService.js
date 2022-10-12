import axios from "axios";

const LEARNING_OUTCOMES_API_BASE_URL = "http://localhost:8080/api/v1/learning_outcomes";

class LearningOutcomesService{
    
    getLearningOutcomesByStudentId(studentid){
        return axios.get(LEARNING_OUTCOMES_API_BASE_URL + "/studentid/" + studentid)
    }
}

export default new LearningOutcomesService()