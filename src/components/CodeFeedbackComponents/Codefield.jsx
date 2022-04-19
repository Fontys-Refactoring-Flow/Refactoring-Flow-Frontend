import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import '../../style/CodeFeedback.css'

const Codefield = () => {
    const [code, setCode] = React.useState(
        'public class Cell{\n' +
        '    boolean isMarked;\n' +
        '    boolean containsMine;\n' +
        '    boolean isRevealed;\n' +
        '    public Cell(int XPos, int YPos, boolean isMine){\n' +
        '        xPos = XPos;\n' +
        '        yPos = YPos;\n' +
        '        isMarked = false;\n' +
        '        containsMine = isMine;\n' +
        '        isRevealed = false;\n' +
        '    }\n\n' +
        '    public void ToggleMark(){\n' +
        '    isMarked = !isMarked;\n' +
        '    }\n\n' +
        '    public boolean GetContainsMine(){\n' +
        '        return containsMine;\n' +
        '    }\n\n' +
        '    // returns true if the cell contains a mine\n' +
        '    public boolean Reveal(){\n' +
        '        isRevealed = true;\n' +
        '        return containsMine;\n' +
        '    }\n' +
        '}'
    );

    // To be able to change the fontsize
    const [fontsize, setFontsize] = React.useState(14); // default fontsize is 14

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