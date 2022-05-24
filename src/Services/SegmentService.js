import axios from "axios";

const CHALLENGE_API_BASE_URL = "http://localhost:8080/api/v1/segment";

class SegmentService{

    GetSegments(){
        return axios.get(CHALLENGE_API_BASE_URL);
    }

    GetSegmentBycourseID(CourseID){
        console.log(CourseID);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + 'courseId/' + CourseID);
    }

    SegmentCount(CourseID){
        console.log(CourseID);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + 'segementcount/' + CourseID);
    }

    findSegmentByNrAndCourseId(Nr, CourseID){
        console.log(CourseID);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + Nr + '/' + CourseID);
    }
}

export default new SegmentService()