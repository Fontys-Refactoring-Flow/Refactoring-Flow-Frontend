import React, {ChangeEvent, useEffect, useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../../../style/CodeFeedback.css'
import {useAuth} from "../../context/AuthContext";
import codeService from "../../../services/codeService";

type CodeFileType = {
    id: number,
    version: number
}

type CodeFieldProps = {
    code: string
}

const CodeField = (props: CodeFieldProps) => {

    const auth = useAuth()
    const [code, setCode] = useState("");
    const [fontsize, setFontsize] = useState(14); // default fontsize is 14
    const [version, setVersion] = useState(1);
    const [versionMax, setVersionMax] = useState(1);
    const [fileLinks, setFileLinks] = useState<Array<CodeFileType>>();
    const style = { color: 'white' };
    let codeFile : string;

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
                    codeFile = res.data;
                    setCode(codeFile);
                })

            }
        }
    }

    useEffect(() => {
        codeService.getCodeByNameAndAssignmentID(1, auth!.student!.name).then((res) => {
            setFileLinks(res.data)
            if(fileLinks === undefined) return
            let latestVersion : CodeFileType = fileLinks[0]

            for(let i = 0; i < fileLinks.length; i++){
                if (fileLinks[i].version > latestVersion.version) {
                    latestVersion = fileLinks[i]
                    codeService.getCodeById(latestVersion.id).then((res: { data: any; })=>{
                        codeFile = res.data;
                        setCode(codeFile);
                        setVersionMax(latestVersion.version);
                        setVersion(latestVersion.version);
                    })
                }
            }
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
    }, [props])



    return(
        <div className='editor-container'>
            <button onClick={() => setFontsize(fontsize + 2)} className='font-btn btn'>plus</button>
            <button onClick={() => setFontsize(fontsize - 2)} className='font-btn btn'>min</button>
            <input type={"range"} min={1} max={versionMax} value={version} onChange={handleVersionChange} /> <output style={style}> {version} version</output>
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