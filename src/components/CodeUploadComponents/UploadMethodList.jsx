import React, { Component } from 'react';
import UploadMethodCard from './UploadMethodCard';
import Card from '../GeneralComponents/Card';
import '../../style/Home.css'

class UploadMethodList extends Component {

    render() { 
        return ( 
            <div className='container'>
                <p class='title'>Select a method to upload your code.</p>

                <div className='card-container'>
                    <Card title='Folder' text='Upload a local folder.' link='upload/folder'/>
                    <Card title='Github' text='Use an existing Github repository.' link='upload/github'/>
                    <Card title='Gitlab' text='use a Gitlab repo' btnText='select' link='upload/gitlab'/>
                </div>
            </div>
         );
    }
}
 
export default UploadMethodList;