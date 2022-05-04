import React, { useEffect } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const handleVErification = async () => {
        await sendEmailVerification();
        toast.success('Email Verification Sent ', {
            theme: 'colored',
            delay: 0
        });
    }

    if (loading) {
        return <p> Loading... </p>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    console.log(user);
    if (!user.emailVerified && user.providerData[0].providerId === 'password') {
        return <div className='text-center h-[100vh] flex flex-col justify-center items-center bg-orange-200'>
            <p className='text-red-500 text-6xl font-semibold'>Email is not Verified !!!</p>
            <button onClick={handleVErification} className='py-2 px-4 my-12 text-white bg-orange-400 hover:bg-orange-700 rounded-3xl text-2xl w-1/3'>Send Verification Mail Again.</button>
        </div>
    }
    return children;
};

export default RequireAuth;