import {MouseEventHandler} from "react";

type ButtonProps = {
    text: string,
    color: string,
    onClick: MouseEventHandler,
}

const Button = (props : ButtonProps) => {
  return (
    <button
    onClick={props.onClick}
    style={{backgroundColor: props.color}}
    className='btn'>
        {props.text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

export default Button
