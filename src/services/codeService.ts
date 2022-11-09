import axios from "axios";

const getCodeById = (id: string | number) => {
    return axios.get('http://localhost:8080/api/v1/codefile/' + id);
}

const getCodeByNameAndAssignmentID = (id: string | number, name: string) => {
    return axios.get('http://localhost:8080/api/v1/codefile/get?name='+ name +'&assignmentID='+ id);
}

const codeService = {
    getCodeById,
    getCodeByNameAndAssignmentID
}

export default codeService