import axios from "axios";
import {axiosInstance} from "./axios.service";

const getAssignments = () => {
    return axiosInstance.get("/assignment/");
}

const getAssignmentById = (assignmentId : number) => {
    return axiosInstance.get(`/assignment/findById/${assignmentId}`);
}

const getAssignmentByStudentId = (studentId : string) => {
    return axios.get(`/assignment/findByStudentId/${studentId}`)
}

export default {
    getAssignments,
    getAssignmentById,
    getAssignmentByStudentId
}