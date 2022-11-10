import axios from "axios";



const getCodeById = (id: string | number) => {
    return axios.get('http://localhost:8080/api/v1/codefile/' + id);
}

const getCodeByNameAndAssignmentID = (id: string | number, name: string) => {
    return axios.get('http://localhost:8080/api/v1/codefile/get?name='+ name +'&assignmentID='+ id);
}

const postCode = (code : string, assignmentId: number, userId : number, version : number) =>{
    
    return axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/codefile/',
        params: {
            code: code,
            assignmentId: assignmentId,
            userId: userId,
            version: version

        }
    });
}

const codeService = {
    getCodeById,
    getCodeByNameAndAssignmentID,
    postCode
}

export default codeService