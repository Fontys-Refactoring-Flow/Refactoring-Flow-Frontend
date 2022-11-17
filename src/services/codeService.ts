import axios from "axios";
import {axiosInstance} from "./axios.service";



const getCodeById = (id: string | number) => {
    return axios.get('http://localhost:8080/api/v1/codefile/' + id);
}

const getCodeByNameAndAssignmentID = (id: string | number, name: string) => {
    return axios.get('http://localhost:8080/api/v1/codefile/get?name='+ name +'&assignmentID='+ id);
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
    postCode
}

export default codeService