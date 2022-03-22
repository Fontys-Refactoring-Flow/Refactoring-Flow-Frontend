import React, { Component } from 'react';
import '../style/Footer.css'

class Footer extends Component {

    state = {  }
    render() { 
        return ( 
            <footer className="py-3 my-4 border-top bg-gradient">
                <div>
                    <span className="text-muted">© 2022 Refactory Flow, Inc</span>
                </div>
            </footer>
        );
    }
}
 
export default Footer;