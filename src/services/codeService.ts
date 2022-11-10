import axios from "axios";



const getCodeById = (id: string | number) => {
    return axios.get('http://localhost:8080/api/v1/codefile/' + id);
}

const getCodeByNameAndAssignmentID = (id: string | number, name: string) => {
    return axios.get('http://localhost:8080/api/v1/codefile/get?name='+ name +'&assignmentID='+ id);
}

const postCode = (code : string, assignmentId: number, userId : number) =>{
    
    return axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/codefile/',
        headers: {},
        data: {
            code: code,
            assignmentId: assignmentId,
            userId: userId

        }
    });
}

const codeService = {
    getCodeById,
    getCodeByNameAndAssignmentID,
    postCode
}

export default codeService