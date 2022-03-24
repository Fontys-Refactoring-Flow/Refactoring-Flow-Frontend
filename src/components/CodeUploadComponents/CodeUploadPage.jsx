import React, { Component } from 'react';
import UploadMethodCard from './UploadMethodCard';
import '../../style/CodeUpload.css'

class CodeUploadPage extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
                <div className='card-container'>
                    <UploadMethodCard title='Folder' text='Upload a local folder.' />
                    <UploadMethodCard title='Github' text='Use an existing Github repository.' />
                    <UploadMethodCard title='Gitlab' text='use a Gitlab repo' />
                </div>
                <div className='card-container'>
                    <UploadMethodCard title='hello' text='world' />
                    <UploadMethodCard title='github' text='use a github repo' />
                    <UploadMethodCard title='hello' text='world' />

                </div>
            </div>
         );
    }
}
 
export default CodeUploadPage;