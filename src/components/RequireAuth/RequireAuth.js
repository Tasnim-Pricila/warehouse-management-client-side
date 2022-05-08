import { faRefresh, faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        return <div className='text-center min-h-[90vh] flex flex-col justify-center items-center bg-violet-200 py-12 px-8'>
            <p className='text-6xl mb-8 font-semibold text-slate-700'>OPPS ! </p>
            <p className='text-red-500 md:text-6xl text-3xl font-semibold'>Your Email is not Verified !!!
            </p>
            <FontAwesomeIcon icon={faSadTear} className='text-slate-500 text-6xl my-8'></FontAwesomeIcon>
            <button onClick={handleVErification} className='py-4 px-4 my-4 text-white bg-orange-400 hover:bg-orange-700 rounded-3xl text-2xl md:w-1/3'>Send Verification Mail Again...</button>
            <small> <FontAwesomeIcon icon={faRefresh} className='pr-2'></FontAwesomeIcon>
                Please reload this page after completing your verification.</small>
        </div>
    }
    return children;
};

export default RequireAuth;