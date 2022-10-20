import React, { useEffect } from 'react';
import CodeField from '../code/codeFeedback/CodeField';
import CodeService from '../../services/code.service';
import { useParams } from 'react-router-dom';
import '../../style/AssignmentWorkspace.css';
import StepAccordion from './StepAccordion';

const AssignmentWorkspace = () => {

    const [code, setCode] = React.useState('');
    let codes;
    codes = new Object()

    let params = useParams();

    function bin2String(array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            result += String.fromCharCode(parseInt(array[i], 2));
        }
        return result;
    }

    useEffect(() => {
        CodeService.GetCodeByNameAndAssignmentID(1,"Antwan").then((res) => {
            codes = res.data

            let latestVersion = codes[0];
            for(var i = 0; i < codes.length; i++){

                if (codes[i].version > latestVersion.version){
                    latestVersion = codes[i];
                    setCode(bin2String(latestVersion.data));

                }

            }


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