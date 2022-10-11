import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import GlobalButton from '../components/Atoms/Global-button';
import GlobalForm from '../components/Atoms/Global-form';

function Login({ show, setShow }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className='modal-title fs-1 fw-bold'>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <GlobalForm
                                type='text'
                                name='email'
                                placeholder='Email'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <GlobalForm
                                type='password'
                                name='password'
                                placeholder='Password'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <GlobalButton
                        name='Login'
                        className='btn link border-0 w-100'
                    />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;