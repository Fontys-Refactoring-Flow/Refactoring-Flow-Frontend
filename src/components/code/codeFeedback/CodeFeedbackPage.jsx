import React, { useEffect } from 'react';
import '../../../style/CodeFeedback.css'
import Codefield from './Codefield';
import LocalStorageManager from '../../../services/localStorageManager';
import FeedbackBubble from './FeedbackBubble';


const CodeFeedbackPage = () => {

    let code = null;

    useEffect(() => {
        code = LocalStorageManager.GetUploadedCode();
        console.log(code);
    }, []);

    return(
        <div className='container code-feedback-Container'>
            <div className='code-field'>
                <Codefield code={LocalStorageManager.GetUploadedCode()}/>
            </div>

            <div className='feedback-container'>
                <FeedbackBubble text='feedback'/>
            </div>
        </div>
    );
}

export default CodeFeedbackPage;