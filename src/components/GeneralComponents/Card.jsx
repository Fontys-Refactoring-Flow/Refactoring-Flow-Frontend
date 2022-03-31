import React, { Component } from 'react';
import '../../style/Main.css'
import '../../style/Card.css'

class Card extends Component {
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
            <div className='card upload-card'>
                <div className='card-body'>
                    <img src={this.props.image} className='card-img-top card-image' alt='card image'/>
                    <h5 className='card-title'>{this.state.title}</h5>
                    <p className='card-text'>{this.state.text}</p>
                    <a className='button' href={this.state.link}>{this.props.btnText}</a>
                </div>
            </div>
         );
    }
}
 
export default Card;