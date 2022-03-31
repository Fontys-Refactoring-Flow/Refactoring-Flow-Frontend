import React, { Component } from 'react';
import '../../style/CodeUpload.css'
import '../../style/Button.css'

class GitUpload extends Component {
    constructor(props) {
        super(props);

        this.state = { gitPlatform: props.gitPlatform}
    }

    
    render() { 
        return ( 
            <div className='container'>
                <h3>Upload using {this.state.gitPlatform}</h3>
                <a>To upload a {this.state.gitPlatform} project to refactoring flow, enter the remote repositories url down below.</a>
                <div class="input-group flex-nowrap git-input">
                    <span class="input-group-text" id="addon-wrapping">url:</span>
                    <input type="text" class="form-control" placeholder="repository" aria-label="repository" aria-describedby="addon-wrapping"/>
                </div>
                <a className='btn button-primary text-white'>continue</a>
            </div>
         );
    }
}
 
export default GitUpload;