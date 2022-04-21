import React, { useEffect } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../../style/CodeFeedback.css'
import LocalStorageManager from '../../Services/LocalStorageManager';

const Codefield = () => {

    const [code, setCode] = React.useState(); // default is the uploaded code
    const [fontsize, setFontsize] = React.useState(14); // default fontsize is 14


    // useEffect with a empty array to simulate a componentDidMount method.
    // The code should only be loaded once instead of with every component refresh. 
    useEffect(() => {
        const uploadedCode = LocalStorageManager.GetUploadedCode();
        setCode(uploadedCode);
    }, []);


    return(
        <div className='editor-container'>
            <button onClick={() => setFontsize(fontsize + 2)} className='font-btn btn'>plus</button>
            <button onClick={() => setFontsize(fontsize - 2)} className='font-btn btn'>min</button>
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