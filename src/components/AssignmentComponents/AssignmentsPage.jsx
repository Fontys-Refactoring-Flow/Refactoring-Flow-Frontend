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
            challenge: []
        }
    }

    componentDidMount() {
        AssignmentService.getChallenges().then((res) => {
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
                                <div className='card' style={{ width: '18rem', height: '200px', margin: '10px' }}>
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
                                        <div className='btn-holder'>
                                            <button class="btn btn-refactoring text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + challenge.id} aria-expanded="false" aria-controls="collapseExample">
                                                Show more info
                                            </button>
                                            <Link to='/assignment-details' className='btn btn-refactoring text-white' role="button" id={challenge.id}>Start challenge</Link>
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
