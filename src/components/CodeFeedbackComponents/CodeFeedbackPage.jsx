import React from 'react';
import FeedbackBubble from './FeedbackBubble';
import '../../style/CodeFeedback.css'

const CodeFeedbackPage = () => {
    return(
        <div className='container code-feedback-Container'>
            <textarea rows='30' className='form-control code-field'></textarea>

            <div className='feedback-container'>
                <FeedbackBubble text='feedback'/>
            </div>
        </div>
    );
}

export default CodeFeedbackPage;