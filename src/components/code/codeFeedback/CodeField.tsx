import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../../../style/CodeFeedback.css'
import AuthContext, {useAuth} from "../../context/AuthContext";
import codeService from "../../../services/codeService";
import assignmentService from "../../../services/assignment.service";

type CodeFileType = {
    id: number,
    version: number
}

type CodeFieldProps = {
    code: string
    assignmentId? : number
    feedbackCallback: (feedback: string) => void
}

const CodeField = (props: CodeFieldProps) => {

    const auth = useContext(AuthContext)
    const [code, setCode] = useState("");
    const [assignmentId, setAssignmentId] = useState(Number(props.assignmentId));
    const [fontsize, setFontsize] = useState(14); // default fontsize is 14
    const [version, setVersion] = useState(0);
    const [versionMax, setVersionMax] = useState(1);
    const [refactorType, setRefactorType] = useState("Extract_Method");
    const [fileLinks, setFileLinks] = useState<Array<CodeFileType>>();

    const handleVersionChange = (e: ChangeEvent<HTMLInputElement>) => {
        const version = parseInt(e.target.value)
        setVersion(version)
        changeVersion(version)
    }


    const changeVersion = (version: number) => {
        for(let i = 0; i < fileLinks!.length; i++){
            if(fileLinks === undefined) return

            if (fileLinks[i].version === version) {
                codeService.getCodeById(fileLinks[i].id).then((res: { data: any; }) => {
                    setCode(res.data);
                })
                codeService.getFeedbackFromCodeFile(fileLinks[i].id).then((res: { data: any; }) => {
                    props.feedbackCallback(res.data);
                })
            }
        }

    }

    const submitCode = () => {
        codeService.postCode(code, assignmentId, auth?.student?.id!, versionMax, refactorType).then(() =>{
            window.location.reload();
        });
    }

    const changeVersionFlow = (version: number, file : Array<CodeFileType>) => {
        for(let i = 0; i < file!.length; i++){
            if(file === undefined) return

            if (file[i].version === version) {
                codeService.getCodeById(file[i].id).then((res: { data: any; }) => {
                    setCode(res.data);
                })
            }
        }
    }

    useEffect(() => {
        assignmentService.getAssignmentById(Number(props.assignmentId)).then((res: { data: any; }) => {
            setRefactorType(res.data.refactoringType);
        });

        codeService.getCodeByNameAndAssignmentID(assignmentId, auth?.student?.name!).then((file) => {
            if(file.data.length === 0){
                codeService.getTemplate(assignmentId).then((res)=>{
                    setCode(res.data);
                    setVersionMax(1);
                    setVersion(0);
                    changeVersionFlow(latestVersion.version, file.data);
                })
            }

            setFileLinks(file.data)
            let latestVersion : CodeFileType = file.data[0]



            for(let i = 0; i < file.data.length; i++){
                if (file.data[i].version >= latestVersion.version) {
                    latestVersion = file.data[i];
                    codeService.getCodeById(file.data[i].id).then((res)=>{
                        setCode(res.data);
                        setVersionMax(latestVersion.version);
                        setVersion(latestVersion.version);
                        changeVersionFlow(latestVersion.version, file.data);
                    })
                }
            }
            if(file.data.length === 0){return;}
            codeService.getFeedbackFromCodeFile(latestVersion.id).then((res: { data: any; }) => {
                props.feedbackCallback(res.data);
            });
        });

        let loadedCode = props.code;

        if(loadedCode === 'undefined'){
            loadedCode =
                'public class MyFirstJavaProgram {\n' +
                '    public static void main(String []args) {\n' +
                '        System.out.println("Hello World");\n' +
                '    }\n' +
                '}'
        }

        setCode(loadedCode)
    }, [auth, props, assignmentId])

    return(
        <div className='editor-container'>
            <button onClick={() => setFontsize(fontsize + 2)} className='font-btn btn'>plus</button>
            <button onClick={() => setFontsize(fontsize - 2)} className='font-btn btn'>min</button>

            <input type={"range"} min={1} max={versionMax} value={version} onChange={handleVersionChange} /> <output style={{ color: 'white' }}> {version} version</output>
            <button onClick={submitCode} className='font-btn btn'>submit</button>

            {/* <button onClick={() => CodeService.PostCode(code)} className='font-btn btn'>save file</button> */}
            <CodeEditor
                value={code}
                language='java'
                placeholder='insert code'
                onChange={(e) => setCode(e.target.value)}
                padding={15}
                style={{
                    fontSize: fontsize,
                    backgroundColor: 'rgb(58, 57, 59)',
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                }}
            />
        </div>
    );
}

export default CodeField;
