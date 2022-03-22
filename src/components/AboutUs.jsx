import React, { Component } from 'react';
import '../style/AboutUs.css'


class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='text-container'>
                <h3 className='about-text'>About us:</h3>
                <div className='about-text'>
                    <p>lorem ipsum onzin</p>
                    <p>lorem ipsum onzin</p>
                    <p>lorem ipsum onzin</p>
                </div>
            </div>
         );
    }
}
 
export default AboutUs;