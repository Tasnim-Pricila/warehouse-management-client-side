import { faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (googleUser || facebookUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, facebookUser])

    return (
        <div className='text-center'>
            <div className='flex items-center gap-6'>
                <p className='bg-slate-400 h-[1px] w-full'></p>
                <p className='py-4 text-slate-200 font-semibold tracking-widest '>OR</p>
                <p className='bg-slate-400 h-[1px] w-full'></p>
            </div>
            <button className='border w-full py-2 tracking-wide' 
            onClick={() => signInWithGoogle()}>
                <FontAwesomeIcon icon={faGoogle} className='text-orange-500 pr-2 
                '></FontAwesomeIcon>
                Sign in With Google
            </button>
            <button className='border w-full py-2 mt-2 tracking-wide'
            onClick={() => signInWithFacebook()}>
                <FontAwesomeIcon icon={faFacebookF} className='text-blue-500 pr-2 
                '></FontAwesomeIcon>
                Sign in With Facebook
            </button>
        </div>
    );
};

export default SocialLogin;