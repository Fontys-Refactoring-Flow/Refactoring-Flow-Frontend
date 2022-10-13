import React, { useEffect } from 'react';
import '../../../style/CodeFeedback.css'
import CodeField from './CodeField';
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
                <CodeField code={LocalStorageManager.GetUploadedCode()!}/>
            </div>

            <div className='feedback-container'>
                <FeedbackBubble text='feedback'/>
            </div>
        </div>
    );
}

export default CodeFeedbackPage;