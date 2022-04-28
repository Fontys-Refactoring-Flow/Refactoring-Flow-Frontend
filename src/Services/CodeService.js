class CodeService {

    EncodeString(string){
        let encoder = new TextEncoder();
        const encodedString = encoder.encode(string);
        return encodedString;
    }

    postCode(string){
        let codeByteArr = this.EncodeString(string);
    }
}

export default new CodeService();