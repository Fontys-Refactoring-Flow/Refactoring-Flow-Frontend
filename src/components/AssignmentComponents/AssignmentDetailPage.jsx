import React, { Component } from 'react';
import AssignmentService from '../../Services/AssignmentService';

class AssignmentDetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge: [],
            challengeid: 2
        }
    }

    componentDidMount() {
        AssignmentService.getChallengeById(this.state.challengeid).then((res) => {
            console.log(res)
            this.setState({ challenge: res.data });
        })
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>{this.state.challenge.name}</h1>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">Learning outcomes</th>
                        </tr>
                        <tr>
                            <th scope='col'>
                                Code Quality
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>
                                Refactoring
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default AssignmentDetailPage;