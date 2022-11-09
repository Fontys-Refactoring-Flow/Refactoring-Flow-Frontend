import React, {useEffect, useState} from 'react';

type LearningOutcomesType = {
    studentId: number,
    refactoringBar: number,
    codeQualityBar: number
}

const LearningOutcomes = (props: LearningOutcomesType) => {
    const [studentId, setStudentId] = useState(4)
    const [refactoringBar, setRefactoringBar] = useState(4)
    const [codeQualityBar, setCodeQualityBar] = useState(3)

    useEffect(() => {
        setRefactoringBar((refactoringBar / 5) * 100)
        setCodeQualityBar((codeQualityBar / 5) * 100)
    })

    const handleProgressBar = (outcome: number) => {
        if(outcome == 1){
            return '20%'
        }
        else if(outcome == 2){
            return '40%'
        }
        else if(outcome == 3){
            return '60%'
        }
        else if(outcome == 4){
            return '80%'
        }
        else if(outcome == 5){
            return '100%'
        }
    }

    return (
        <div className='container' style={{"marginTop": 50}}>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th colSpan={39} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">Learning outcomes</th>
                    </tr>
                    <tr>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>Criteria</th>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">Ratings</th>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>Points</th>
                    </tr>
                    <tr>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>
                            Code Quality
                        </th>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "80%", backgroundColor: "#663366"}}></div>
                            </div>
                        </th>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>
                            {"4/5"}
                        </th>

                    </tr>
                    <tr>
                        <th scope='col'>
                            Refactoring
                        </th>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "80%", backgroundColor: "#e5007d" }}></div>
                            </div>
                        </th>
                        <th colSpan={3} className="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>
                        {"3/5"}
                        </th>
                    </tr>
                </thead>

            </table>
        </div>
    );
}

export default LearningOutcomes;