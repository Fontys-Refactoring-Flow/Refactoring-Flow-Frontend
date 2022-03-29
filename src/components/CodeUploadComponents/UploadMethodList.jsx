import React, { Component } from 'react';
import UploadMethodCard from './UploadMethodCard';
import '../../style/CodeUpload.css'

class UploadMethodList extends Component {

    render() { 
        return ( 
            <div>
                <h3>Select a method to upload your code.</h3>

                <div className='card-container'>
                    <UploadMethodCard title='Folder' text='Upload a local folder.' link='upload/folder'/>
                    <UploadMethodCard title='Github' text='Use an existing Github repository.' link='upload/github'/>
                    <UploadMethodCard title='Gitlab' text='use a Gitlab repo' link='upload/gitlab'/>
                    <UploadMethodCard title='hello' text='world'/>
                    <UploadMethodCard title='github' text='use a github repo'/>
                    <UploadMethodCard title='hello' text='world'/>
                </div>
            </div>
         );
    }
}
 
export default UploadMethodList;