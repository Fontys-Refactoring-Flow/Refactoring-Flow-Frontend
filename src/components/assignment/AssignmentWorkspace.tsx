import React, { useEffect } from 'react';
import CodeField from '../code/codeFeedback/CodeField';
import { useParams } from 'react-router-dom';
import '../../style/AssignmentWorkspace.css';
import StepAccordion from './StepAccordion';
import {number} from "prop-types";

const AssignmentWorkspace = () => {

    const [code, setCode] = React.useState('');
    let fileLinks = {};
    let codeFile;

    const {assignmentId} = useParams();

    function bin2String(array: Array<string>) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            result += String.fromCharCode(parseInt(array[i], 2));
        }
        return result;
    }

    return (
        <div className='container assignment-container'>
            <div className='editor-container code-field'>
                <CodeField code={code} assignmentId={parseInt(assignmentId || "")}/>
            </div>
            <StepAccordion/>
        </div>
    );
}

export default AssignmentWorkspace;