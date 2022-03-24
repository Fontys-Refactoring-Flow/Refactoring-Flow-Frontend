import React, { Component } from 'react'
import ChallengeService from '../Services/ChallengeService';

class ChallengeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge : []
        }
    }
    
    componentDidMount() {
        ChallengeService.getChallenges().then((res) => {
            console.log(res)
            this.setState({ challenge: res.data });
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Available challenges</h2>
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

export default ChallengeList;
