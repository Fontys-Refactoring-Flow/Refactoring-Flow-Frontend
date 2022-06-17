import React from 'react';
import '../../style/CodeFeedback.css'

const FeedbackBubble = (props) => {
    return(
        <div className='card feedback-bubble'>
            <div className='card-body'>
                <h5>{props.text}</h5>
                <p className="card-text">{"Feedback would be visible here"}</p>
            </div>
        </div>
    );
}

export default FeedbackBubble;