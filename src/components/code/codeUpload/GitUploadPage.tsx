import React from 'react';
import '../../../style/Main.css'
import '../../../style/CodeUpload.css'

type GitUploadType = {
    gitPlatform: string
}

const GitUpload = (props : GitUploadType) => {
    return (
        <div className='container'>
            <p className='title'>Upload using {props.gitPlatform}</p>
            <p>To upload a {props.gitPlatform} project to refactoring flow, enter the remote repositories url down below.</p>
            <div className="input-group flex-nowrap git-input">
                <span className="input-group-text" id="addon-wrapping">url:</span>
                <input type="text" className="form-control" placeholder="repository" aria-label="repository" aria-describedby="addon-wrapping"/>
            </div>
            <a className='button'>continue</a>
        </div>
    );
}
 
export default GitUpload;