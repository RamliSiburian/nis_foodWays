import React from 'react'
import { Form } from 'react-bootstrap';

function GlobalForm({ name, className, type, placeholder }) {
    return (
        <Form.Control
            name={name}
            className={className}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default GlobalForm;