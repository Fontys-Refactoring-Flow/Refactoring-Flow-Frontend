import React from 'react';
import FeedbackBubble from './FeedbackBubble';
import '../../style/CodeFeedback.css'
import { CodeBlock, dracula } from 'react-code-blocks';

let code = 'package mine_sweeper_game;\n\npublic class Cell {\n    boolean isMarked;\n    boolean containsMine;\n    boolean isRevealed;\n    int xPos;\n    int yPos;\n\n    public Cell(int XPos, int YPos, boolean isMine) {'

const CodeFeedbackPage = () => {
    return(
        <div className='container code-feedback-Container'>
            <div className='code-field'>
                <CodeBlock
                    text={code}
                    language='java'
                    showLineNumbers='true'
                    theme={dracula}
                    warpLines
                />
            </div>

            <div className='feedback-container'>
                <FeedbackBubble text='feedback'/>
            </div>
        </div>
    );
}

export default CodeFeedbackPage;