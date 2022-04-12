import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const Codefield = () => {
    const [code, setCode] = React.useState(
        'int i = 10;'
    );

    return(
        <CodeEditor
            value={code}
            language='java'
            placeholder='please enter code'
            onChange={(env) => setCode(env.target.value)}
            padding={15}
            style={{
                fontSize: 12,
                backgroundColor: 'rgb(58, 57, 59)',
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
            }}
        />
    );
}

export default Codefield;