import React, { Component } from 'react';
import '../style/Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <header className='p-3 bg-gradient text-white' id='header'>
                <div className='container'>
                    <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                        <a className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'></a>

                        <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                            <li><a className='nav-link px-2 text-lightblue'>Home</a></li>
                            <li><a className='nav-link px-2 text-lightblue'>Assignments</a></li>
                            <li><a className='nav-link px-2 text-lightblue'>Upload project</a></li>
                            <li><a className='nav-link px-2 text-lightblue'>Grades</a></li>
                        </ul>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default Header;