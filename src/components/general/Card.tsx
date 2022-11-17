import React, {MouseEventHandler} from 'react';
import '../../style/Main.css'
import '../../style/Card.css'

type CardType = {
    title: string,
    text: string,
    btnText: string,
    link?: string,
    image: string,
    onClick?: MouseEventHandler
}

const Card = (props : CardType) => {
    return (
        <div className='card upload-card' onClick={props.onClick}>
            <div className='card-body'>
                <img src={props.image} className='card-img-top card-image' alt='card image'/>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.text}</p>
                <a className='button' href={props.link}>{props.btnText}</a>
            </div>
        </div>
     );
}
 
export default Card;