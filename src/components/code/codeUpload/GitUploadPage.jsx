import React, { Component } from 'react';
import '../../../style/Main.css'
import '../../../style/CodeUpload.css'


class GitUpload extends Component {
    constructor(props) {
        super(props);

        this.state = { gitPlatform: props.gitPlatform}
    }

    
    render() { 
        return ( 
            <div className='container'>
                <p className='title'>Upload using {this.state.gitPlatform}</p>
                <p>To upload a {this.state.gitPlatform} project to refactoring flow, enter the remote repositories url down below.</p>
                <div class="input-group flex-nowrap git-input">
                    <span class="input-group-text" id="addon-wrapping">url:</span>
                    <input type="text" class="form-control" placeholder="repository" aria-label="repository" aria-describedby="addon-wrapping"/>
                </div>
                <a className='button'>continue</a>
            </div>
         );
    }
}
 
export default GitUpload;