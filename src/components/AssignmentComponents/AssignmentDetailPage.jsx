import React, { Component } from 'react';
import AssignmentService from '../../Services/AssignmentService';

class AssignmentDetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge: [],
            challengeid: 2,
            codeQualityProgress: []
            
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
                            <th colspan="39" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">Learning outcomes</th>
                        </tr>
                        <tr>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>Criteria</th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">Ratings</th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>Points</th>
                        </tr>
                        <tr>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>
                                Code Quality
                            </th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", backgroundColor: "#663366" }}></div>
                                </div>
                            </th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>

                            </th>

                        </tr>
                        <tr>
                            <th scope='col'>
                                Refactoring
                            </th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%", backgroundColor: "#e5007d" }}></div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                </table>
            </div>
        );
    }
}

export default AssignmentDetailPage;