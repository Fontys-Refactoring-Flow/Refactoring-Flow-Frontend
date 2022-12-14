import React, {useState} from 'react';
import Button from "../general/Button";

const StepAccordion = () => {
    const[step,setStep]=useState(1)

    function nextstep() {
        setStep(step + 1)
    }

    return (
        <div className='steps-container'>
            <div className="accordion step-acordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Steps
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3>step {step}</h3>
                            <p> lorem ipsum</p>
                            <Button onClick={nextstep} text={"next step"}/>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Risks
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Give the extracted method an appropriate name.</p>
                            <p>Make sure the extracted method has logical argument names.</p>
                            <p>Keep in mind to use the new method at the right place.</p>
                            <p>Consider making the new method private.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Reveal Solution
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Create new method named <i>isfull</i></strong></p>
                            <p>
                                Create a new method that looks at the animals list to see if it contains to much animals.
                                In this example the limit is set to <i>10</i>.
                            </p>
                            <br/>
                            <p><strong>Remove if statement from <i>addAnimal</i> method.</strong></p>
                            <p>
                                Remove the if statement on lines 7-9 and add it to the new method, separating the if statement
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
     );
}
 
export default StepAccordion;