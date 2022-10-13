import axios from "axios";

const ASSIGNMENT_API_BASE_URL = "http://localhost:8080/api/v1/assignment/";

class AssignmentService{

    getAssignments(){
        return axios.get(ASSIGNMENT_API_BASE_URL);
    }

    getAssignmentById(assignmentid){
        console.log(assignmentid);
        return axios.get(ASSIGNMENT_API_BASE_URL  + "id/" + assignmentid);
    }

    getAssignmentByStudentId(studentId){
        return axios.get(ASSIGNMENT_API_BASE_URL  + 'findByStudentId/' + studentId)
    }
}

export default new AssignmentService()