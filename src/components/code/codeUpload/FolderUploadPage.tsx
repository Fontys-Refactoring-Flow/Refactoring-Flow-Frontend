import React, {ChangeEvent, useState} from 'react';
import LocalStorageManager from '../../../services/localStorageManager';
import '../../../style/Main.css';


const FolderUpload = () => {

    const [selectedFile, setSelectedFile] = useState<null | File>(null);
    const [fileString, setFileString] = useState<string | null>();


    const addFileStringToLocal = () => {
        LocalStorageManager.SetUploadedCode(fileString!);
    }


    function ReadSingleFile(evt: ChangeEvent<HTMLInputElement>){
        const file = evt.target.files![0];

        if (file) {
            const r = new FileReader();
            r.onload = function(e) {
                const contents = e.target!.result;
                setFileString(contents?.toString());
                // setFlushFileString(contents);
            }

            r.readAsText(file);

        } else { 
            alert("Failed to load file");
        }
    }

    function OnFileChange(event : ChangeEvent<HTMLInputElement>){
        setSelectedFile(event.target.files![0]);
        ReadSingleFile(event);

        // add the code to local storage to transfer it to the editor.
    }

    // function OnFileUpload(){
    //     const formData = new FormData();
    //     formData.append('fileStr', fileString);

    //     CodeService.PostCode(formData.get());
    //     // TODO: proceed to upload the file to the database.
    // }
    
    return ( 
        <div className='container'>
            <p className='title'>Select the file you want to upload.</p>
            <form>
                <div className='input-group mb-3 file-upload-container'>
                    <input type="file" className='form-control' onChange={OnFileChange}/>
                </div>
                {/* <input type='submit' className='button' value='upload' onClick={OnFileUpload} style={{'margin-right': '10px'}}></input> */}
            </form>

            
            <a href='/edit' className='button' onClick={addFileStringToLocal}>open in editor</a>
        </div>
    );
}
 
export default FolderUpload;