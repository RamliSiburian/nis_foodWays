import React from 'react'
import { Button } from 'react-bootstrap'

function GlobalButton({ name, className, variant, bgColor, onClick }) {
    return (
        <Button
            variant={variant}
            className={className}
            onClick={onClick}
        >
            {name}
        </Button>
    )
}

export default GlobalButton;