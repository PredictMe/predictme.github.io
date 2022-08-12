import React, { Component } from 'react'
import './AppButton.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

 const AppButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize  
    }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <button className={'appbutton-btn ${checkButtonStyle} ${CheckButtonSize}'} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export  {AppButton}