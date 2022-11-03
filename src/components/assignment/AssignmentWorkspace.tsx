import React, { useEffect } from 'react';
import CodeField from '../code/codeFeedback/CodeField';
import CodeService from '../../services/code.service';
import { useParams } from 'react-router-dom';
import '../../style/AssignmentWorkspace.css';
import StepAccordion from './StepAccordion';

const AssignmentWorkspace = () => {

    const [code, setCode] = React.useState('');
    let fileLinks = new Object();
    let codeFile;



    let params = useParams();

    function bin2String(array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            result += String.fromCharCode(parseInt(array[i], 2));
        }
        return result;
    }

    useEffect(() => {

    }, [params])

    return (
        <div className='container assignment-container'>
            <div className='editor-container code-field'>
                <CodeField code={code}/>
            </div>
            <StepAccordion/>
        </div>
    );
}

export default AssignmentWorkspace;