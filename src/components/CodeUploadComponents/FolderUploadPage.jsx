import React from 'react';
import { Link } from 'react-router-dom';
import CookieManager from '../../Services/CookieManager';
import '../../style/Main.css'


const FolderUpload = () => {

    const [selectedFile, setSelectedFile] = React.useState(null);
    const [fileString, setFileString] = React.useState();


    function ReadSingleFile(evt){
        var file = evt.target.files[0]; 

        if (file) {
            var r = new FileReader();
            r.onload = function(e) { 
                var contents = e.target.result;
                setFileString(contents);
            }

            r.readAsText(file);

        } else { 
            alert("Failed to load file");
        }
    }

    function OnFileChange(event){
        setSelectedFile(event.target.files[0]);
        ReadSingleFile(event);
    }

    function OnFileUpload(){
        const formData = new FormData();
        formData.append(
            'myFile',
            selectedFile,
            selectedFile.name
        );

        CookieManager.SetUploadedCode(fileString);
        // TODO: proceed to upload the file to the database or open the editor. 
    }

    
    return ( 
        <div className='container'>
            <p className='title'>Select the repository you want to upload.</p>
            <div className='input-group mb-3 file-upload-container'>
                <input type="file" className='form-control' onChange={OnFileChange}/>
            </div>
            <p className='button' onClick={OnFileUpload}>upload</p>
            
            <Link to='/edit' className='button'>editor</Link>
        </div>
    );
}
 
export default FolderUpload;