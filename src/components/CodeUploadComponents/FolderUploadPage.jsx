import React, { Component } from 'react';
import '../../style/Main.css'


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
                <p className='title'>Select the repository you want to upload.</p>
                <div class="input-group mb-3 file-upload-container">
                    <input type="file" class="form-control" onChange={this.onFileChange}/>
                </div>
                <a className='button' onClick={this.onFileUpload}>upload</a>
            </div>
         );
    }
}
 
export default FolderUpload;