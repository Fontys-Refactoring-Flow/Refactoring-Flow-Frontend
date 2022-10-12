class LocalStorageManager {
    
    CodeKey = 'uploadCode';

    GetUploadedCode(){
        let code =  localStorage.getItem(this.CodeKey);
        return code;
    }

    GetAndClearUploadedCode(){
        let code = localStorage.getItem(this.CodeKey);
        localStorage.removeItem(this.CodeKey);
        return code;
    }

    SetUploadedCode(code){
        localStorage.setItem(this.CodeKey, code);
    }
}

export default new LocalStorageManager();