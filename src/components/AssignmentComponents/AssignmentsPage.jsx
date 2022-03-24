import React, { Component } from 'react'
import AssignmentService from '../../Services/AssignmentService';


class AssignmentsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge : []
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
                <h3 className='text-center'>Available challenges</h3>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Difficulty</th>
                                <th>Duration</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.challenge.map(
                                    challenge =>
                                        <tr key={challenge.id}>
                                            <td>{challenge.name}</td>
                                            <td>{challenge.subject}</td>
                                            <td>{challenge.difficulty}</td>
                                            <td>{challenge.duration}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AssignmentsPage;
