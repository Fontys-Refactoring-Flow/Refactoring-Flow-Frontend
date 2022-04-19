import React, { Component } from 'react';
import '../../style/Main.css'


class FolderUpload extends Component {

    state = {
        selectedFile: null,
        fileString: ''
    }

    ReadSingleFile(evt){
        var file = evt.target.files[0]; 

        if (file) {
            var r = new FileReader();
            r.onload = function(e) { 
                var contents = e.target.result;
                const fileContent = contents;
                
                this.setState({
                    fileString: fileContent
                })
                
                console.log(fileContent);
                console.log(this.state.fileString);
            }
            r.readAsText(file);
        } else { 
            alert("Failed to load file");
        }
    }

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
        this.ReadSingleFile(event);
    }

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            'myFile',
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);

        // const fs = require("fs");
        // fs.readFile(this.state.selectedFile, (err, data) => {
        //     if(err) throw err;

        //     console.log(data.toString());
        // });
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