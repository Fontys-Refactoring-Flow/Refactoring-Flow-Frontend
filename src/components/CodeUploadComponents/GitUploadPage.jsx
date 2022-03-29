import React, { Component } from 'react';
import '../../style/CodeUpload.css'
import '../../style/Button.css'

class GitUploadPage extends Component {
    constructor(props) {
        super(props);

        this.state = { gitPlatform: props.gitPlatform}
    }
    
    render() { 
        return ( 
            <div className='container'>
                <h3>Upload using {this.state.gitPlatform}</h3>
                <div>
                    To upload a {this.state.gitPlatform} project to refactoring flow, enter the remote repositories url down below. 
                </div>
                <a>click</a>
            </div>
         );
    }
}
 
export default GitUploadPage;