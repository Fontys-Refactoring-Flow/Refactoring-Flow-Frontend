class SessionHandler {
    
    setStudentId(id){
        sessionStorage.setItem("studentid", id);
    }

    getStudentId(){
        return sessionStorage.getItem("studentid");
    }

    clearStudentId(){
        return sessionStorage.clear("studentid");
    }

    clearLoginAttemps(){
        return sessionStorage.setItem("loginAttempts", 0);
    }

    setLoginAttemps(){
        let count = this.getLoginAttempts() + 1;
        return sessionStorage.setItem("loginAttempts", count)
    }

    getLoginAttempts(){
        return sessionStorage.getItem("loginAttemps");
    }
}

export default new SessionHandler;