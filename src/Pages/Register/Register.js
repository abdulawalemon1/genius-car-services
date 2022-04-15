import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = e => {
        navigate('/login');
    }
    if (user) {
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

                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ?<Link to={'/login'} onClick={navigateLogin} className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;