import React, { useEffect } from 'react';
import CodeField from '../CodeFeedbackComponents/Codefield';
import CodeService from '../../Services/CodeService';
import { useParams } from 'react-router-dom';
import '../../style/AssignmentWorkspace.css';

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
            <div className='steps-container'>
                <div class="accordion step-acordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Reveal Solution
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p><strong>Create new method named <i>isfull</i></strong></p>
                                <p>
                                    Create a new method that looks at the animals list to see if it contains to much animals.
                                    In this example the limit is set to <i>10</i>.
                                </p>
                                <br/>
                                <p><strong>Remove if statement from <i>addAnimal</i> method.</strong></p>
                                <p>
                                    Remove the if statement on lines 7-9 and add it to the new method, seperating the if statement
                                    from the AddAnimal method
                                </p>
                                <br/>
                                <p><strong>Use new method in old method</strong></p>
                                <p>
                                    The AddAnimal method still needs to perform the check for available space, 
                                    so the new method should be used on the location of the old if statement. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AssignmentWorkspace;