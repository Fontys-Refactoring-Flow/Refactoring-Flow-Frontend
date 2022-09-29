import React, { Component } from 'react';
import UploadMethodCard from './UploadMethodCard';
import Card from '../GeneralComponents/Card';
import '../../style/Home.css';
import FolderImage from '../../Images/Folder.png'
import GithubImage from '../../Images/GithubLogo.png';
import GitlabImage from '../../Images/GitlabLogo.png';

class UploadMethodList extends Component {

    render() { 
        return ( 
            <div className='container'>
                <p class='title'>Select a method to upload your code.</p>

                <div className='card-container'>
                    <div className='card-wrap'>
                        <Card title='Folder' text='Upload a local folder.' btnText='select' link='upload/folder' image={FolderImage}/>
                    </div>
                    <div className='card-wrap'>
                        <Card title='Github' text='Use an existing Github repository.' btnText='select' link='upload/github' image={GithubImage}/>
                    </div>
                    <div className='card-wrap'>
                        <Card title='Gitlab' text='use a Gitlab repo' btnText='select' link='upload/gitlab' image={GitlabImage}/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UploadMethodList;