import React, {ChangeEvent, useEffect, useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../../../style/CodeFeedback.css'
import CodeService from "../../../services/code.service";


type CodeFieldProps = {
    code: string
}

const CodeField = (props: CodeFieldProps) => {

    const [code, setCode] = useState("");
    const [fontsize, setFontsize] = useState(14); // default fontsize is 14
    const [version, setVersion] = useState(1);
    const [versionMax, setVersionMax] = useState(1);
    let fileLinks : object;
    let codeFile : string;

    const handleVersionChange = (e: ChangeEvent<HTMLInputElement>) => {
        const version = parseInt(e.target.value)
        setVersion(version)
        changeVersion(version)
    }

    const changeVersion = (version: number) => {
        // @ts-ignore
        for(let i = 0; i < fileLinks.length; i++){

            // @ts-ignore
            if (fileLinks[i].version == version) {
                // @ts-ignore
                CodeService.GetCodeById(fileLinks[i].id).then((res: { data: any; }) => {
                    codeFile = res.data;
                    setCode(codeFile);
                })

            }
        }
    }

    useEffect(() => {
        // @ts-ignore
        CodeService.GetCodeByNameAndAssignmentID(1,"Antwan").then((res: { data: Object; }) => {
            fileLinks = res.data


            let latestVersion : object
            // @ts-ignore
            latestVersion = fileLinks[0]
            // @ts-ignore
            for(let i = 0; i < fileLinks.length; i++){

                // @ts-ignore
                if (fileLinks[i].version > latestVersion.version) {
                    // @ts-ignore
                    latestVersion = fileLinks[i]
                    // @ts-ignore
                    CodeService.GetCodeById(latestVersion.id).then((res: { data: any; })=>{
                        codeFile = res.data;
                        setCode(codeFile);
                        // @ts-ignore
                        setVersionMax(latestVersion.version);
                        // @ts-ignore
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
            <input type={"range"} min={1} max={versionMax} value={version} onChange={handleVersionChange} />
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