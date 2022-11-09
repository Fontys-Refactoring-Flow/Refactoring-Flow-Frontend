import React, {useEffect, useState} from 'react'
import '../../style/Button.css'
import '../../style/Card.css'
import { Link } from 'react-router-dom';
import AssignmentService from '../../services/assignment.service';
import {useAuth} from "../context/AuthContext";
import {AssignmentType} from "../../types/AssignmentType";

const AssignmentInProgress = () => {
    const auth = useAuth()
    const [assignments, setAssignments] = useState<AssignmentType[] | null>(null)

    useEffect(() => {
        AssignmentService.getAssignmentByStudentId(auth!.student!.id?.toString()).then((res) => {
            setAssignments(res.data);
        })
    })

    return (
        <div className='card-container'>
            {
                assignments!.map((assignment => {
                    return ( <tr key={assignment.id.toString()}>
                            <div className='card' style={{ width: '18rem', minHeight: '300px', margin: '10px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{assignment.name}</h5>
                                    <p className="card-text">{assignment.description}</p>
                                    <div className="collapse" id={"collapseExample" + assignment.id}>
                                        <p className="card card-body">
                                            Subject: {assignment.subject}
                                        </p>
                                        <p className="card card-body">
                                            Description: {assignment.description}
                                        </p>
                                        <p className="card card-body">
                                            Difficulty: {assignment.difficulty}
                                        </p>
                                        <p className="card card-body">
                                            Estimated Duration: {assignment.duration}
                                        </p>
                                    </div>
                                    <div className='button-container'>
                                        <button className="btn btn-refactoring text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + assignment.id} aria-expanded="false" aria-controls="collapseExample">
                                            Show more info
                                        </button>
                                        <Link to='/assignment-details' className='btn btn-refactoring text-white' role="button" id={assignment.id.toString()}>Continue assignment</Link>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    )
                }))
            }
        </div>
    );
}
 
export default AssignmentInProgress;