import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Forms.css'

const Forms = () => {
    return (
        <Form className=' form-side'>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className='px-4' variant="primary" type="submit">
                Login
            </Button>

            <p className='mt-4'><small>Don't Have an account? Please Register</small></p>
        </Form>
    );
}



export default Forms;