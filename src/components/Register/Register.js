import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)

    const { createUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log(email, name, photoURL, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('successful');
                form.reset();
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })



    }
    const handleAccepted = event => {
        console.log(event.target)
    }




    return (
        <div className='register'>
            <h1 className='mb-4'>Please Register</h1>
            <Form onSubmit={handleSubmit} className='register-form'>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />

                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter Photo" />

                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleAccepted} label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
                </Form.Group>
                <button className='login-btn'>Register</button>

            </Form>
        </div >
    );
};

export default Register;