import React, { Component } from 'react'
import AssignmentService from '../../Services/AssignmentService';
import '../../style/AssignmentsPage.css'
import Button from '../GeneralComponents/Button';
import '../../style/Button.css'
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
                            <div className="card" style={{ width: '18rem', margin: '10px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{challenge.name}</h5>
                                    <p className="card-text">{challenge.description}</p>
                                    <Link to='/assignment-details' class="btn button-style text-white" role="button">Show more info</Link>
                                </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default AssignmentsPage;
