import axios from "axios";

class CodeService {

    EncodeString(string){
        let encoder = new TextEncoder();
        const encodedString = encoder.encode(string);
        return encodedString;
    }

    GetCodeById(id){
        try{
            return axios.get('http://localhost:8080/api/v1/CodeFile/' + id);
        }
        catch(ex){
            console.error(ex);
            return null;
        }
    }

    PostCode(string){
        let codeByteArr = this.EncodeString(string);
        let myBlob = new Blob(codeByteArr, {type: 'text/x-java-source'});
        console.log(myBlob.text());

        // todo: transform to formdata before upload
        
        try{
            axios.post('http://localhost:8080/api/v1/CodeFile', myBlob);
            console.log('succes?')
        }
        catch(err){
            console.log(err);
        }
    }
}

export default new CodeService();