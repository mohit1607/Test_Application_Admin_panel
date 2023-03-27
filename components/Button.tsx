import React from 'react'

type propTypes = {
    onClick?: Function,
    children: any ,
    // rest of the parameters
    [x: string]: any
}

const defaultClass = 'bg-green-400 text-white p-8'

export const Button = (props: propTypes) => {
    // perfect example of reusable component.
    const {children, onClick = () => {console.log('clicked')}, className = defaultClass,...rest} = props
  return (
    <button onClick={() => onClick()} className={className} {...rest}>{children}</button>
  )
}
