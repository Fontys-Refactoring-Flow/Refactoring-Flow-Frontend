import React, {useEffect, useState} from 'react';
import '../../style/Header.css'
import { Link } from 'react-router-dom'
import {useAuth} from "../context/AuthContext";

const Header = (props) => {
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
    }

    let student
    try { student = JSON.parse(auth.student) } catch (err) {}
    if (student != null && student.id !== null) {
        return (
            <header className='p-3  text-white' id='header'>
                <div className='container'>
                    <div
                        className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                        <a className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'></a>
                        <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                            <li>
                                <Link to='/' className='nav-link px-2 text-lightblue'>Home</Link>
                            </li>
                            <li>
                                <Link to='/assignments' className='nav-link px-2 text-lightblue'>Assignments</Link>
                            </li>
                            {/* <li>
                            <Link to='/studentassignments' className='nav-link px-2 text-lightblue'>Assignments in progress</Link>
                        </li> */}
                            <li>
                                <Link to='/upload' className='nav-link px-2 text-lightblue'>Upload project</Link>
                            </li>
                            {/* <li>
                            <Link to='/learning_outcomes' className='nav-link px-2 text-lightblue'>Learning outcomes</Link>
                        </li> */}
                            {/* <li>
                            <Link to='/progress' className='nav-link px-2 text-lightblue'>Progress</Link>
                        </li> */}
                            <li>
                                <a className='btn nav-link px-2 text-lightblue' href='/' onClick={handleLogout}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className='p-3  text-white' id='header'>
                <div className='container'>
                    <div
                        className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                        <a className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'></a>
                        <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                            <li>
                                <Link to='/' className='nav-link px-2 text-lightblue'>Home</Link>
                            </li>
                            <li>
                                <Link to='/login' className='nav-link px-2 text-lightblue'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
