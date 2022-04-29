import { faHamburger, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Home = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    
    return (
        <>
            <div className='flex justify-between px-12 py-4 bg-[#1B1E1E] text-white'>
                <div>
                    <Link to= '/home' className='uppercase font-semibold'>Vintage Exotic Cars</Link>
                </div>
                <div onClick={() => setMenuIcon(!menuIcon)}  className='w-6 h-6 md:hidden'>
                    {menuIcon ? <FontAwesomeIcon icon={faX}></FontAwesomeIcon> : <FontAwesomeIcon icon={faHamburger} ></FontAwesomeIcon>}
                </div>
                <div className={`flex md:flex-row md:gap-12 flex-col md:static duration-1000 absolute bg-[#1B1E1E] md:bg-transparent text-center uppercase ${menuIcon ? 'right-0 left-0 top-14 py-4 gap-2' : 'right-0 left-0 top-[-220px]'} `}>
                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='/'> Inventory </NavLink>
                    <NavLink to='/'> Manage Inventories </NavLink>
                    <NavLink to='/'> Add Items </NavLink>
                    <NavLink to='/'> Blogs </NavLink>
                    <NavLink to='/'> Contact </NavLink>
                    
                </div>
                <NavLink to='/login' className={'uppercase'}>
                        <FontAwesomeIcon icon={faUser} className='pr-2'></FontAwesomeIcon> Login 
                    </NavLink>
            </div>
        </>
    );
};

export default Home;