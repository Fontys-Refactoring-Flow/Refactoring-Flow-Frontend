import React, { Component } from 'react'
import '../../style/Button.css'
import '../../style/Card.css'
import { Link } from 'react-router-dom';
import AssignmentService from '../../Services/AssignmentService';

class AssignmentInProgress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentid: 1,
            challenge: []
        }
    }

    componentDidMount() {
        AssignmentService.getChallengeByStudentId(this.state.studentid).then((res) => {
            console.log(res)
            this.setState({ challenge: res.data });
        })
    }

    render() {
        return (
            <div className='card-container'>
                {
                    this.state.challenge.map(
                        challenge =>
                            <tr key={challenge.id}>
                                <div className='card' style={{ width: '18rem', minHeight: '300px', margin: '10px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{challenge.name}</h5>
                                        <p className="card-text">{challenge.description}</p>
                                        <div class="collapse" id={"collapseExample" + challenge.id}>
                                            <p class="card card-body">
                                                Subject: {challenge.subject}
                                            </p>
                                            <p class="card card-body">
                                                Description: {challenge.description}
                                            </p>
                                            <p class="card card-body">
                                                Difficulty: {challenge.difficulty}
                                            </p>
                                            <p class="card card-body">
                                                Estimated Duration: {challenge.duration}
                                            </p>
                                        </div>
                                        <div className='button-container'>
                                            <button class="btn btn-refactoring text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + challenge.id} aria-expanded="false" aria-controls="collapseExample">
                                                Show more info
                                            </button>
                                            <Link to='/assignment-details' className='btn btn-refactoring text-white' role="button" id={challenge.id}>Continue challenge</Link>
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