import React, { Component } from 'react';
import '../../style/CodeUpload.css'
import '../../style/Button.css'
import axios from 'axios';

class FolderUpload extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectedFile: null
    }

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    }

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            'myFile',
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);
    }

    render() { 
        return ( 
            <div class="container">
                <div class="input-group mb-3 file-upload-container">
                    <h3>Select the repository you want to upload.</h3>
                    <input type="file" class="form-control" onChange={this.onFileChange}/>
                </div>
                <a className='btn card-button text-white' onClick={this.onFileUpload}>upload</a>
            </div>
         );
    }
}
 
export default FolderUpload;