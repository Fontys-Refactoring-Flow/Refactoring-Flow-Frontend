import axios from "axios";

class CodeService {

    EncodeString(string){
        let encoder = new TextEncoder();
        const encodedString = encoder.encode(string);
        return encodedString;
    }

    PostCode(string){
        let codeByteArr = this.EncodeString(string);
        let myBlob = new Blob(codeByteArr, {type: 'application/json'});
        console.log(myBlob.text());
        
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