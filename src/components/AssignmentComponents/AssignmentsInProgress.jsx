import React, { Component } from 'react'
import '../../style/Button.css'
import '../../style/Card.css'
import { Link } from 'react-router-dom';
import AssignmentService from '../../services/AssignmentService';
import SessionHandler from '../../SessionHandler/SessionHandler';

class AssignmentInProgress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentid: SessionHandler.getStudentId(),
            assignment: []
        }
    }

    componentDidMount() {
        AssignmentService.getAssignmentByStudentId(this.state.studentid).then((res) => {
            console.log(res)
            this.setState({ assignment: res.data });
        })
    }

    render() {
        return (
            <div className='card-container'>
                {
                    this.state.assignment.map(
                        assignment =>
                            <tr key={assignment.id}>
                                <div className='card' style={{ width: '18rem', minHeight: '300px', margin: '10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{assignment.name}</h5>
                                        <p className="card-text">{assignment.description}</p>
                                        <div class="collapse" id={"collapseExample" + assignment.id}>
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
                                        </div>
                                        <div className='button-container'>
                                            <button class="btn btn-refactoring text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + assignment.id} aria-expanded="false" aria-controls="collapseExample">
                                                Show more info
                                            </button>
                                            <Link to='/assignment-details' className='btn btn-refactoring text-white' role="button" id={assignment.id}>Continue assignment</Link>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                    )
                }
            </div>
        );
    }
}
 
export default AssignmentInProgress;