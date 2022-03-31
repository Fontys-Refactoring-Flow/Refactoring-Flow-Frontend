import React, { Component } from 'react';
import '../../style/CodeUpload.css'
import '../../style/Button.css'

class UploadMethodCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            text: props.text,
            btnText: props.btnText,
            link: props.link,
            image: props.image
        }
    }

    render() { 
        return ( 
            <div className='card '>
                <div className='card-body'>
                    <img src={this.props.image} className='card-img-top' alt='card image'/>
                    <h5 className='card-title'>{this.state.title}</h5>
                    <p className='card-text'>{this.state.text}</p>
                    <a className='btn card-button text-white' href={this.state.link}>{this.props.btnText}</a>
                </div>
            </div>
         );
    }
}
 
export default UploadMethodCard;