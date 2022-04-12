import React from 'react';
import FeedbackBubble from './FeedbackBubble';
import '../../style/CodeFeedback.css'
import Codefield from './Codefield';


const CodeFeedbackPage = () => {
    return(
        <div className='container code-feedback-Container'>
            <div className='code-field'>
                <Codefield/>
            </div>

            <div className='feedback-container'>
                <FeedbackBubble text='feedback'/>
            </div>
        </div>
    );
}

export default CodeFeedbackPage;