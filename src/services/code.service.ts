import axios from "axios";

class CodeService {
    GetCodeById(id: string | number){
        try{
            return axios.get('http://localhost:8080/api/v1/codefile/' + id);
        }
        catch(ex){
            console.error(ex);
            return null;
        }
    }

    GetCodeByNameAndAssignmentID(id: string | number, name: string){
        try{
            return axios.get('http://localhost:8080/api/v1/codefile/get?name='+ name +'&assignmentID='+ id);
        }
        catch(ex){
            console.error(ex);
            return null;
        }
    }


}

export default new CodeService();