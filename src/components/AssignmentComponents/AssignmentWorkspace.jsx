import React, { useEffect } from 'react';
import CodeField from '../CodeFeedbackComponents/Codefield';
import CodeService from '../../Services/CodeService';
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