class CodeFormatter{
    FileToJson(file: string){
        return JSON.stringify(file)
    }
}

export default new CodeFormatter();