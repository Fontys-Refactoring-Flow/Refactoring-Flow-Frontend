import React from 'react'
import './../style/Progress.css'
import { Link } from 'react-router-dom'

const ProgressPage = () => {
  return (
    <div className='container'>
        <p className='title'>Your progress</p>
        <p className='title2'>Submitted assignments:</p>
        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
            <h5 class="card-title">Assignment name</h5>
            <p class="card-text">Uitleg Assignment</p>
            <a href="#" class="card-button">Assignment Details</a>
            </div>
        </div>
        <p className='title2'>Reviewed assignments:</p>
        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
            <h5 class="card-title">Assignment name</h5>
            <p class="card-text">Uitleg Assignment</p>
            <Link to='/about'  class="card-button">See feedback </Link> 
            </div>
        </div>
    </div>
  )
}

export default ProgressPage
