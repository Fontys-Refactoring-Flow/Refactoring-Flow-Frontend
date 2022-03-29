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
            <div>
                <h1 >Challenges available</h1>
                <div className="card-container">
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
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </p>
                                        </div>
                                        <div className='btn-holder'>
                                            <button class="btn btn-refactoring text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + challenge.id} aria-expanded="false" aria-controls="collapseExample">
                                                Show more info
                                            </button>
                                            <Link to='/assignment-details' className='btn btn-refactoring text-white' role="button">Start challenge</Link>
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
