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
}

export default new SessionHandler;