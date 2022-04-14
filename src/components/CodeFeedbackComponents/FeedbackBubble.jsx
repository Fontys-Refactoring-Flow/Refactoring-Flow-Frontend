import React from 'react';
import '../../style/CodeFeedback.css'

const FeedbackBubble = (props) => {
    return(
        <div className='card feedback-bubble'>
            <div className='card-body'>{props.text}</div>
        </div>
    );
}

export default FeedbackBubble;