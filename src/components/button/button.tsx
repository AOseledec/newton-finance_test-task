import React from 'react'

const Button = ({onClick, className}: ButtonProps) => {
  return <button className={className} onClick={onClick}>Показать коментарий</button>
}

export interface ButtonProps {
  className: string,
  onClick: () => void
}

export default Button;
