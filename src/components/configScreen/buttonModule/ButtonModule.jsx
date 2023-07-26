import React from 'react'

export default function ButtonModule({ nameButtons, active, selectActiveButton }) {
    
    const buttonClassName = active
        ? 'button-style button-style-selected'
        : 'button-style'

    return (
        <button
            className={buttonClassName}
            onClick={() => selectActiveButton(nameButtons)}
        >
            {nameButtons}
        </button>
    )
}
