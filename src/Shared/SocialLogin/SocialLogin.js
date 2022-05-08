import { faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../CustomHook/useToken';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const [token] = useToken(googleUser || facebookUser);

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token])

    return (
        <div className='text-center'>
            <div className='flex items-center gap-6'>
                <p className='bg-slate-400 h-[1px] w-full'></p>
                <p className='py-4 text-slate-200 font-semibold tracking-widest '>OR</p>
                <p className='bg-slate-400 h-[1px] w-full'></p>
            </div>
            <button className='border w-full py-2 tracking-wide flex justify-center items-center' 
            onClick={() => signInWithGoogle()}>
                <FontAwesomeIcon icon={faGoogle} className='text-orange-500 pr-2 
                basis-[20%]'></FontAwesomeIcon>
                <p>Sign in With Google</p>
               
            </button>
            <button className='border w-full py-2 mt-2 tracking-wide flex justify-center items-center'
            onClick={() => signInWithFacebook()}>
                <FontAwesomeIcon icon={faFacebookF} className='text-blue-500 pr-2 basis-[20%] 
                '></FontAwesomeIcon>
                <p>Sign in With Facebook</p>
            </button>
        </div>
    );
};

export default SocialLogin;