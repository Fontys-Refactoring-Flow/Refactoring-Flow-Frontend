import React from 'react';
import '../../style/Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
            <ul className="nav">
                <li className="footer-item">
                    <p className='footer-text'>© 2022</p>
                </li>
                <li className="nav-item">
                    <Link to='about' className="footer-link">About us</Link>
                </li>
            </ul>
            </div>
        </footer>
     );
}
 
export default Footer;