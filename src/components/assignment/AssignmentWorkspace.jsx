import React, { useEffect } from 'react';
import CodeField from '../code/codeFeedback/CodeField';
import CodeService from '../../services/code.service';
import { useParams } from 'react-router-dom';
import '../../style/AssignmentWorkspace.css';
import StepAccordion from './StepAccordion';

const AssignmentWorkspace = () => {

    const [code, setCode] = React.useState('');

    let params = useParams();

    useEffect(() => {
        // CodeService.GetCodeById(params.codeId).then((res) => {
        //     setCode(res.data);
        // });
        CodeService.GetCodeById(1).then((res) => {
            setCode(res.data);
        });
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