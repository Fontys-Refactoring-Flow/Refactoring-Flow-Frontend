class CookieManager {

    CodeKey = 'uploadCode';

    GetUploadedCode(){
        return localStorage.getItem(this.CodeKey);
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

export default new CookieManager();