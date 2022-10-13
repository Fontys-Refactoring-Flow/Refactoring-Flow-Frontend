class LocalStorageManager {
    
    CodeKey = 'uploadCode';

    GetUploadedCode(){
        const code = localStorage.getItem(this.CodeKey);
        return code === null ? "" : code;
    }

    GetAndClearUploadedCode(){
        let code = localStorage.getItem(this.CodeKey);
        localStorage.removeItem(this.CodeKey);
        return code;
    }

    SetUploadedCode(code : string){
        localStorage.setItem(this.CodeKey, code);
    }
}

export default new LocalStorageManager();