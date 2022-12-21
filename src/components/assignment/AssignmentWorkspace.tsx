import React, { useEffect, useState } from 'react';
import CodeField from '../code/codeFeedback/CodeField';
import { useParams } from 'react-router-dom';
import '../../style/AssignmentWorkspace.css';
import StepAccordion from './StepAccordion';
import {number} from "prop-types";
import FeedbackBubble from "../code/codeFeedback/FeedbackBubble";

const AssignmentWorkspace = () => {

    const [code, setCode] = useState('');
    const [feedback, setFeedback] = useState("");
    let fileLinks = {};
    let codeFile;

    const {assignmentId} = useParams();

    const handleFeedback = (feedback: string) => {
        setFeedback(feedback);
        console.log(feedback);
    }

    return (
        <div className='container assignment-container'>
            <div className='editor-container code-field'>
                <CodeField code={code}  assignmentId={parseInt(assignmentId || "")} feedbackCallback={handleFeedback}/>
            </div>
            <div >
                <FeedbackBubble text={feedback}/>
            </div>

            <StepAccordion/>
        </div>
    );
}

export default AssignmentWorkspace;