import { async } from '@firebase/util';
import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";




    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    if (user) {
        // navigate(from, { replace: true });
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;



        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });



        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
    }
    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Login"></PageTitle>

            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-3" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Genius Car? <Link to={'/register'} onClick={navigateRegister} className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
            <p>Forget Password? <Link to={'/register'} onClick={resetPassword} className='text-primary pe-auto text-decoration-none'>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
