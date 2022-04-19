import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if(!user.emailVerified){
        return <div className='text-center mt-5 w-50 border mx-auto p-5 shadow'>
            <h3 className='text-warning'>Sorry your email address is not verified!!</h3>
            <h4 className='text-success'>Please verify your email address</h4>
            <button
                className='btn btn-success'
                onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
                }}
            >
                Send Verification email again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;