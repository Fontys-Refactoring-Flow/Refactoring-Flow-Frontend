import React, { Component } from 'react';
import '../../../style/Main.css'

type UploadMethodCardProps = {
    title: string,
    text: string,
    link: string
}

const UploadMethodCard = (props : UploadMethodCardProps) => {
    return (
        <div className='card upload-card'>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.text}</p>
                <a className='button' href={props.link}>select</a>
            </div>
        </div>
     );
}
 
export default UploadMethodCard;