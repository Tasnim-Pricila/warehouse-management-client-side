import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mb-12'>
                <img src={notfound} alt="" />
                <Link to='/home' className='uppercase border bg-orange-400 w-[200px] mx-12 text-center py-2 px-4 font-semibold'>
                    <p >Back to Home  &nbsp;</p>
                </Link>
            </div>
        </>
    );
};

export default NotFound;