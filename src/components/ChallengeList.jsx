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
                                <th>Level</th>
                                <th>Duration</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.challenge.map(
                                    challenge =>
                                        <tr key={challenge.id}>
                                            <td>challenge.Name</td>
                                            <td>challenge.Subject</td>
                                            <td>challenge.Level</td>
                                            <td>challenge.Duration</td>
                                            <button value={challenge.Name} onClick={console.log("Challenge selected")}>
                                                {"Select challenge"}
                                            </button>
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
