import React, { Component } from 'react';
import '../style/Footer.css'
import { Link } from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <footer className='footer'>
                <ul class="nav">
                    <li class="footer-item">
                        <p className='footer-text'>© 2022</p>
                    </li>
                    <li class="nav-item">
                        <Link to='about' class="footer-link">About us</Link>
                    </li>   
                </ul>
            </footer>
         );
    }
}
 
export default Footer;