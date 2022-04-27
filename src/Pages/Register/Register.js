import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [token] = useToken(user);


    const navigateLogin = e => {
        navigate('/login');
    }
    if (token) {
        navigate('/home')
    }
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input required type="text" name="name" id="" placeholder='Your name' />

                <input required type="email" name="email" id="" placeholder='Your email' />

                <input required type="password" name="password" id="" placeholder='Your password' />

                <input type="checkbox" name="terms" id="terms" />

                <label htmlFor="terms">Accept terms & conditions</label>
                <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />

            </form>
            <p>Already have an account ?<Link to={'/login'} onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;