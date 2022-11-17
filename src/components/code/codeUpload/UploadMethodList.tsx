import React from 'react';
import Card from '../../general/Card';
import '../../../style/Home.css';
import FolderImage from '../../../images/Folder.png'
import GithubImage from '../../../images/GithubLogo.png';
import GitlabImage from '../../../images/GitlabLogo.png';

const UploadMethodList = () => {
    return (
        <div className='container'>
            <p className='title'>Select a method to upload your code.</p>

            <div className='card-container'>
                <div className='card-wrap'>
                    <Card title='Folder' text='Upload a local folder.' btnText='select' link='upload/folder' image={FolderImage}/>
                </div>
                <div className='card-wrap'>
                    <Card title='Github' text='Use an existing Github repository.' btnText='select'
                          link={"https://github.com/login/oauth/authorize?client_id=3d273800c5d88225223d"} image={GithubImage}/>
                </div>
                <div className='card-wrap'>
                    <Card title='Gitlab' text='use a Gitlab repo' btnText='select' link='upload/gitlab' image={GitlabImage}/>
                </div>
            </div>
        </div>
    );
}
 
export default UploadMethodList;