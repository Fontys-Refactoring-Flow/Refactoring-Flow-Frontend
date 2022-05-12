class SessionHandler {
    
    setStudentId(id){
        sessionStorage.setItem("studentid", "2");
    }

    getStudentId(){
        return sessionStorage.getItem("studentid");
    }
}

export default new SessionHandler;