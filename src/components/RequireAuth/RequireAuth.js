import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    
    const [sendEmailVerification, verificationSending] = useSendEmailVerification(auth);
    const handleVErification = async () => {
        await sendEmailVerification();
        toast.success('Email Verification Sent ', {
            theme: 'colored',
            delay: 0
        });
    }

    if (loading || verificationSending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (!user.emailVerified && user.providerData[0].providerId === 'password') {
        return <div className='text-center h-[100vh] flex flex-col justify-center items-center bg-violet-300'>
            <p className='text-red-500 text-6xl font-semibold'>Email is not Verified !!!</p>
            <button onClick={handleVErification} className='py-4 px-4 my-12 text-white bg-orange-400 hover:bg-orange-700 rounded-3xl text-2xl w-1/3'>Send Verification Mail Again...</button>
        </div>
    }
    return children;
};

export default RequireAuth;