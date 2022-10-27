import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Forms.css';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Forms = () => {

    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    const { providerLogin, signIn } = useContext(AuthContext)

    const from = location.state?.form?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses')
            })
            .catch(error => console.log(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error =>

                setError(error.message)
            )
    }
    return (
        <Form onSubmit={handleSubmit} className=' form-side'>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className='fs-4'>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className='fs-4'>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group> <br></br>

            <button className='login-btn'>Login</button>

            <p className='text-danger mt-2'>{error}</p>

            <div className='mt-5'>
                <Button className='mb-4' variant="outline-primary" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle> Sign in with Google</Button> <br></br>
                <Button variant="outline-secondary"><FaGithub></FaGithub>Sign in with GitHub</Button>


            </div>

            <p className='mt-4'><small>Don't Have an account? Please <Link to='/register'>Register</Link></small></p>
        </Form>
    );
}



export default Forms;