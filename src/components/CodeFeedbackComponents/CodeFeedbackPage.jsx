import React, { useEffect } from 'react';
import FeedbackBubble from './FeedbackBubble';
import '../../style/CodeFeedback.css'
import Codefield from './Codefield';
import LocalStorageManager from '../../Services/LocalStorageManager';


const CodeFeedbackPage = () => {

    let code = null;

    useEffect(() => {
        // code = LocalStorageManager.GetAndClearUploadedCode();
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