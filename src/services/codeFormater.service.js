class CodeFormatter{
    FileToJson(file){
        let fileString = JSON.stringify(file);
        return fileString
    }
}

export default new CodeFormatter();