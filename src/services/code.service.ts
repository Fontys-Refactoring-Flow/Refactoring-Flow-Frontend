import axios from "axios";

class CodeService {
    GetCodeById(id: string | number){
        try{
            return axios.get('http://localhost:8080/api/v1/CodeFile/' + id);
        }
        catch(ex){
            console.error(ex);
            return null;
        }
    }
}

export default new CodeService();