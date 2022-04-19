
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';


const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending1, error1] = useSendEmailVerification(auth);
    if (!user) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>
    }
    if (!user.emailVerified) {
        return <div className=''>
            <h3 className='text-success text-center'>Your Email is not Verified!!</h3>
            <h5 className='text-success text-center'>Please verify email address</h5>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }
                }
                className='btn btn-success '>Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div >
    }
    return children;
};

export default RequireAuth;