import axios from "axios";
import {axiosInstance} from "./axios.service";



const getCodeById = (assignmentId: string | number) => {
    return axios.get('http://localhost:8080/api/v1/codefile/' + assignmentId);
}

const getCodeByNameAndAssignmentID = (id: string | number, name: string) => {
    return axios.get('http://localhost:8080/api/v1/codefile/get?name='+ name +'&assignmentID='+ id);
}

const getTemplate = (id: string | number) => {
    return axios.get('http://localhost:8080/api/v1/codefile/template/' + id);
}

const postCode = (code : string, assignmentId: number, userId : number, version : number) =>{
    
    return axiosInstance.post("/codefile/", {
        code: code,
        assignmentId: assignmentId,
        userId: userId,
        version: version
    })
}

const codeService = {
    getCodeById,
    getCodeByNameAndAssignmentID,
    postCode,
    getTemplate
}

export default codeService