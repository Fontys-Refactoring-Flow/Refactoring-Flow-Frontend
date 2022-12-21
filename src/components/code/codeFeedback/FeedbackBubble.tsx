import React from 'react';
import '../../../style/CodeFeedback.css'

type FeedbackBubbleProps = {
    text: string
}

const FeedbackBubble = (props: FeedbackBubbleProps) => {
    return(
        <div className='card feedback-bubble'>
            <div className='card-body'>
                <h5>Feedback from your code:</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default FeedbackBubble;