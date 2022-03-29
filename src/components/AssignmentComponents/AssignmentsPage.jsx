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
            <div className='container' style={{ marginTop: '50px', display: 'flex' }}>
                {
                    this.state.challenge.map(
                        challenge =>
                            <div className="card card-container" style={{ width: '18rem', margin: '10px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{challenge.name}</h5>
                                    <p className="card-text">{challenge.description}</p>
                                </div>
                                <button className='btn btn-primary' type='button'>
                                    Show more info
                                </button>
                                <Link to='/assignment-details' className='btn button-card text-white' role="button">Select challenge</Link>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default AssignmentsPage;
