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

    const handleSignOut = () =>{
        signOut(auth);
        setMenuIcon(false)
    }
    
    return (
        <>
            <div className='flex justify-between items-center md:px-20 px-2 py-4 bg-[#1B1E1E] text-white sticky top-0 z-50'>
                {/* Logo  */}
                <div>
                    <Link to='/home' className='uppercase font-semibold tracking-wider'>Vintage Exotic Cars</Link>
                </div>

                {/* Menu Icon  */}
                <div onClick={() => setMenuIcon(!menuIcon)} className='w-6 h-6 md:hidden'>
                    {menuIcon ? <FontAwesomeIcon icon={faX}></FontAwesomeIcon> : <FontAwesomeIcon icon={faHamburger} ></FontAwesomeIcon>}
                </div>
                
                {/* Menu Item  */}
                <div className={`flex md:flex-row md:gap-8 flex-col md:static duration-1000 absolute bg-[#1B1E1E] md:bg-transparent text-center uppercase items-center
                 ${menuIcon ? 'right-0 left-0 top-14 py-4 gap-2' : 'right-0 left-0 top-[-220px]'} `} id='hide'
                 >
                    <NavLink to='/' className={({ isActive }) => (isActive ? "text-orange-600" : "")} onClick={() => setMenuIcon(false)}> Home </NavLink>

                    {user &&
                        <>
                            <NavLink to='/manageInventory' className={({ isActive }) => (isActive ? "text-orange-600" : "")} onClick={() => setMenuIcon(false)} > Manage Inventories 
                            </NavLink>
                            <NavLink to='/addItems' className={({ isActive }) => (isActive ? "text-orange-600" : "")} onClick={() => setMenuIcon(false)} > Add Items </NavLink>
                            <NavLink to='/myItems' className={({ isActive }) => (isActive ? "text-orange-600" : "")} onClick={() => setMenuIcon(false)} > My Items </NavLink>
                        </>
                    }

                    <NavLink to='/blogs' className={({ isActive }) => (isActive ? "text-orange-600" : "")} onClick={() => setMenuIcon(false)} > Blogs </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? "text-orange-600" : "")} onClick={() => setMenuIcon(false)}> Contact </NavLink>

                    <div>
                    {!user &&
                        <NavLink to='/login' className={'uppercase'} onClick={() => setMenuIcon(false)}>
                            <FontAwesomeIcon icon={faUser} className='pr-2'></FontAwesomeIcon> Login
                        </NavLink>
                    }
                    {user &&
                        <button className='uppercase border border-orange-400 rounded px-4 py-1 '
                            onClick={handleSignOut}>
                            Logout
                            <FontAwesomeIcon icon={faSignOut} className='pl-2'></FontAwesomeIcon>
                        </button>
                    }
                </div>
                </div>
                
            </div>
        </>
    );
};

export default Header;