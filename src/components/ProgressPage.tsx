import React from 'react'
import './../style/Progress.css'
import './../style/Main.css'
import { Link } from 'react-router-dom'

const ProgressPage = () => {
  return (
    <div className='container'>
        <p className='title'>Your progress</p>
        <p className='title2'>Submitted assignments:</p>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
            <h5 className="card-title">Assignment name</h5>
            <p className="card-text">Uitleg Assignment</p>
            <a href="#" className="button">Assignment Details</a>
            </div>
        </div>
        <p className='title2'>Reviewed assignments:</p>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
            <h5 className="card-title">Assignment name</h5>
            <p className="card-text">Uitleg Assignment</p>
            <Link to='/about'  className="button">See feedback </Link>
            </div>
        </div>
    </div>
  )
}

export default ProgressPage
