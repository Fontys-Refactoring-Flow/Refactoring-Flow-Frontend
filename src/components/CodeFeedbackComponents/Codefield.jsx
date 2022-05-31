import React, { useEffect } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../../style/CodeFeedback.css'
import CodeService from '../../Services/CodeService';

const Codefield = (props) => {

    const [code, setCode] = React.useState();
    const [fontsize, setFontsize] = React.useState(14); // default fontsize is 14


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
            <button onClick={() => CodeService.PostCode(code)} className='font-btn btn'>save file</button>
            <CodeEditor
                value={code}
                language='java'
                placeholder='insert code'
                onChange={(env) => setCode(env.target.value)}
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

export default Codefield;