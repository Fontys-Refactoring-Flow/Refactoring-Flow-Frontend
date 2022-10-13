import React, {useEffect, useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../../../style/CodeFeedback.css'

type CodeFieldProps = {
    code: string
}

const CodeField = (props: CodeFieldProps) => {

    const [code, setCode] = useState("");
    const [fontsize, setFontsize] = useState(14); // default fontsize is 14


    useEffect(() => {
        let loadedCode = props.code;

        if(loadedCode === 'undefined'){
            loadedCode = 
            'public class MyFirstJavaProgram {\n' +
            '    public static void main(String []args) {\n' +
            '        System.out.println("Hello World");\n' +
            '    }\n' + 
            '}'
        }

        setCode(loadedCode);
    }, [props]);


    return(
        <div className='editor-container'>
            <button onClick={() => setFontsize(fontsize + 2)} className='font-btn btn'>plus</button>
            <button onClick={() => setFontsize(fontsize - 2)} className='font-btn btn'>min</button>
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