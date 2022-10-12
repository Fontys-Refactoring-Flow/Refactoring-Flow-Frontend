import React, { Component } from 'react'
import AssignmentService from '../../services/AssignmentService';
import '../../style/AssignmentsPage.css'
import '../../style/Button.css'
import '../../style/Card.css'
import { Link } from 'react-router-dom';

class AssignmentsPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            assignment: [],
        }
    }
    
    componentDidMount() {
        AssignmentService.getAssignments().then((res) => {
            console.log(res)
            this.setState({ assignment: res.data });
        })
    }
     
    render() {
        return (
            <div className='container'>
            <p class='title'>Select an assignment</p>
            <div className='card-container'>
                {
                    this.state.assignment.map(
                        assignment =>
                            <tr key={assignment.id}>
                                <div className='cards'>
                                <div className='card' style={{ width: '18rem', minHeight: '300px'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{assignment.refactoringType}</h5>
                                        <p className="card-text">{"Refactoring level: "}{assignment.level}</p>
                                        {/* <div class="collapse" id={"collapseExample" + assignment.id}>
                                            <p class="card card-body">
                                                Subject: {assignment.subject}
                                            </p>
                                            <p class="card card-body">
                                                Description: {assignment.description}
                                            </p>
                                            <p class="card card-body">
                                                Difficulty: {assignment.difficulty}
                                            </p>
                                            <p class="card card-body">
                                                Estimated Duration: {assignment.duration}
                                            </p>
                                        </div> */}
                                        <div className='button-container'>
                                            {/* <button class="btn btn-refactoring text-white" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + assignment.id} aria-expanded="false" aria-controls="collapseExample">
                                                Show more info
                                            </button> */}
                                            <Link to='/assignment/1'  className='btn btn-refactoring text-white' role="button" id={assignment.id}>Select challenge</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </tr>
                    )
                }
            </div>
            </div>
        );
        
    }
}

export default AssignmentsPage;
