import React, { Component } from 'react'
import AssignmentService from '../../Services/AssignmentService';
import '../../style/AssignmentsPage.css'
import '../../style/Button.css'
import '../../style/Card.css'
import { Link } from 'react-router-dom';

class AssignmentsPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            assignment: [],
            hasError: false
        }
    }

    static getDeraived

    componentDidMount() {
        AssignmentService.getAssignments().then((res) => {
            console.log(res)
            this.setState({ assignment: res.data });
        })
    }

    componentDidCatch(error, info){

    }


    render() {
        return (
            <div className='card-container container'>
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
                                            <button class="btn btn-refactoring text-white" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + assignment.id} aria-expanded="false" aria-controls="collapseExample">
                                                Show more info
                                            </button>
                                            <Link to='/assignment-details' className='btn btn-refactoring text-white' role="button" id={assignment.id}>Select challenge</Link>
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

export default AssignmentsPage;
