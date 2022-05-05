import { faHamburger, faSignOut, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const [user] = useAuthState(auth);
    return (
        <>
            <div className='flex justify-between items-center px-12 py-4 bg-[#1B1E1E] text-white sticky top-0 z-50'>
                <div>
                    <Link to= '/home' className='uppercase font-semibold'>Vintage Exotic Cars</Link>
                </div>
                <div onClick={() => setMenuIcon(!menuIcon)}  className='w-6 h-6 md:hidden'>
                    {menuIcon ? <FontAwesomeIcon icon={faX}></FontAwesomeIcon> : <FontAwesomeIcon icon={faHamburger} ></FontAwesomeIcon>}
                </div>
                <div className={`flex md:flex-row md:gap-8 flex-col md:static duration-1000 absolute bg-[#1B1E1E] md:bg-transparent text-center uppercase ${menuIcon ? 'right-0 left-0 top-14 py-4 gap-2' : 'right-0 left-0 top-[-220px]'} `}>
                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='/'> Inventory </NavLink>
                    { user &&
                    <>
                        <NavLink to='/manageInventory'> Manage Inventories </NavLink>
                        <NavLink to='/addItems'> Add Items </NavLink>
                        <NavLink to='/myItems'> My Items </NavLink>
                    </>    
                    }
                    <NavLink to='/blogs'> Blogs </NavLink>
                    <NavLink to='/contact'> Contact </NavLink>
                    
                    
                </div>
                {!user && 
                <NavLink to='/login' className={'uppercase'}>
                        <FontAwesomeIcon icon={faUser} className='pr-2'></FontAwesomeIcon> Login 
                    </NavLink>
}
                {user && 
                <button className='uppercase border border-orange-400 rounded-lg py-1 px-4'
                onClick={() => signOut(auth)}>
                         Logout <FontAwesomeIcon icon={faSignOut} className='pl-2'></FontAwesomeIcon>
                    </button>
}
            </div>
        </>
    );
};

export default Header;