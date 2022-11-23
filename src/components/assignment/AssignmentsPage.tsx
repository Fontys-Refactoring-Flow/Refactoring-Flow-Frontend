import React, {useEffect, useState, ChangeEvent} from 'react'
import assignmentService from '../../services/assignment.service';
import '../../style/AssignmentsPage.css'
import '../../style/Button.css'
import '../../style/Card.css'
import {Link} from 'react-router-dom';
import {AssignmentType} from "../../types/AssignmentType";

const AssignmentsPage = () => {
    const [assignments, setAssignments] = useState<AssignmentType[]>([])
    const [filtered, setFiltered] = useState<AssignmentType[]>([])

    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if (e.target.value.length > 0){
            setFiltered(assignments.filter(assignments => assignments.refactoringType.toLowerCase().includes(e.target.value)))
            console.log(filtered);
        }
        else{
            setFiltered(assignments)
            console.log(filtered);
        }
    }

    useEffect(() => {
        assignmentService.getAssignments().then((res) => {
            setAssignments(res.data)
            setFiltered(res.data)
        })
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <p className='title'>Select an Assignment</p>
                </div>
                <div className='col-4'>
                    <input className='searchbar' type="text" placeholder="Search Type" onChange={onChange}/>
                </div>
            </div>

        <div className='card-container'>
            {
                filtered!.map(
                    assignment =>
                        <div key={assignment.id}>
                            <div className='cards'>
                            <div className='card' style={{ width: '18rem', minHeight: '300px'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{assignment.refactoringType}</h5>
                                    <p className="card-text">{"Refactoring level: "}{assignment.level}</p>
                                    {/* <div class="collapse" id={"collapseExample" + assignment.id}>
                                        <p class="card card-body">
                                            Subject: {assignment.subject}
                                        </p>
                                        <p class="card card-body">
                                            Description: {assignment.description}
                                        </p>
                                        <p class="card card-body">
                                            Difficulty: {assignment.difficulty}
                                        </p>
                                        <p class="card card-body">
                                            Estimated Duration: {assignment.duration}
                                        </p>
                                    </div> */}
                                    <div className='button-container'>
                                        {/* <button class="btn btn-refactoring text-white" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + assignment.id} aria-expanded="false" aria-controls="collapseExample">
                                            Show more info
                                        </button> */}

                                        <Link to={'/assignment/' + assignment.id }  className='btn btn-refactoring text-white' role="button" id={assignment.id.toString()}>Select challenge</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                )
            }
        </div>
        </div>
    );
}

export default AssignmentsPage;
