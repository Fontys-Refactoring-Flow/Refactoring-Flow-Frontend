import axios from "axios";

const CHALLENGE_API_BASE_URL = "http://localhost:8080/api/v1/Segment";

class SegmentService{

    GetSegments(){
        return axios.get(CHALLENGE_API_BASE_URL);
    }

    GetSegmentBycourseID(CourseID){
        console.log(CourseID);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + CourseID);
    }

    SegmentCount(CourseID){
        console.log(CourseID);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + CourseID);
    }

    findSegmentByNrAndCourseId(Nr, CourseID){
        console.log(CourseID);
        return axios.get(CHALLENGE_API_BASE_URL + '/' + Nr + '/' + CourseID);
    }
}

export default new SegmentService()