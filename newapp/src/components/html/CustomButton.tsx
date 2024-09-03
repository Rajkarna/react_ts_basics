import React from 'react'

type CustomButtonProps = {
    variant : 'primary' | 'secondary';
    onClick:() => void;
    children:string
}& Omit<React.ComponentProps<'button'>, 'children'>
const CustomButton = ({variant, children, onClick}:CustomButtonProps) => {
  return (
    <div>
        <button className={`class-with-${variant}`} onClick={() => onClick()} >{children}</button>
    </div>
  )
}

export default CustomButton