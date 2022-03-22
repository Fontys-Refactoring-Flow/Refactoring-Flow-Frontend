import React, { Component } from 'react';
import '../style/Footer.css'

class Footer extends Component {

    state = {  }
    render() { 
        return ( 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">© 2022 Refactory Flow, Inc</span>
                </div>
            </footer>
        );
    }
}
 
export default Footer;