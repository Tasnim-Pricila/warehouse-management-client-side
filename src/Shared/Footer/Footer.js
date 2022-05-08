import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faArrowUp, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const myDate = new Date();
    const year = myDate.getFullYear();

    // SCroll to top 
    const [goTopBtn, setGoTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setGoTopBtn(true);
            } else {
                setGoTopBtn(false);
            }
        });
    }, []);
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className='grid md:grid-cols-4 grid-cols-1 bg-[#202424] md:px-20 py-20 text-[#7a8395] px-8 gap-8 max-w-full overflow-hidden'>
                <div>
                    <p className='text-xl text-orange-600 uppercase '>Vintage Exotic Cars</p>
                    <p className='text-sm py-8'>Vintage Exotic is a leading two-sided digital automotive dealership that connects car shoppers with sellers. The company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex'>
                            <FontAwesomeIcon icon={faLocationDot} className='pr-2 pt-1'></FontAwesomeIcon>
                            <p>Jam JAm Tower # 92 JashimUddin Road # Uttara # Dhaka-1230 # Bangladesh</p>
                        </div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={faEnvelope} className='pr-2 pt-1'></FontAwesomeIcon>
                            <p>info@vintage-exotic.com</p>
                        </div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={faPhone} className='pr-2 pt-1'></FontAwesomeIcon>
                            <p>01711236578</p>
                        </div>
                    </div>

                </div>
                <div className='md:justify-self-center'>
                    <p className='text-xl text-white uppercase pb-8'>Links</p>
                    <div className='flex flex-col gap-4'>
                        <Link to='/'>Home</Link>
                        <Link to='/manageInventory'>Manage Inventories</Link>
                        <Link to='/addItems'>Add Items</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-white uppercase pb-8'>Help Center</p>
                    <div className='flex flex-col gap-4'>
                        <a href="http://localhost:3000">FAQs</a>
                        <a href="http://localhost:3000">Pricing &#38; Plan</a>
                        <a href="http://localhost:3000">Privacy Policy</a>
                        <a href="http://localhost:3000">Terms &#38; Conditions</a>
                        <a href="http://localhost:3000">Affiliate Program</a>
                        <a href="http://localhost:3000">Helps</a>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-white uppercase pb-8'>Newsletter</p>
                    <p className='mb-6'>Subscribe to our newsletter to get the latest cars discount promotions and other latest news stay updated.</p>
                    <div className='flex items-center'>
                        <input type="email" name="email" id="email" placeholder='Email Address' className='py-4 pl-4 w-64 outline-none' />
                        <FontAwesomeIcon icon={faAngleRight} className='bg-orange-400 fa-2x px-4 py-[12px] cursor-pointer text-white'></FontAwesomeIcon>
                    </div>

                    <p className='italic mt-4'>Don't worry! We don't spam</p>
                </div>
            </div>
            {/* Footer -2  */}

            <div className='flex md:flex-row flex-col justify-between items-center bg-[#202424] md:px-20 py-8 text-[#7a8395] border-t-[1px] border-gray-600 text-center md:text-left overflow-hidden '>
                <p className='text-center px-4'>&copy; {year} Vinatge Exotics Made with <span className='text-orange-600 max-w-full px-1'> &#10084;</span> by <span className='text-white'>Pricila</span> </p>

                <div className='flex md:flex-row gap-6 items-center mt-4 md:mt-0 flex-col'>
                    <p>Follow Us On </p>
                    <span className='flex gap-6 items-center '>
                        <FontAwesomeIcon icon={faTwitter} className='cursor-pointer hover:text-orange-400 hover:duration-500'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faFacebookF} className='cursor-pointer hover:text-orange-400 hover:duration-500'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faInstagram} className='cursor-pointer hover:text-orange-400 hover:duration-500'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faYoutube} className='cursor-pointer hover:text-orange-400 hover:duration-500'></FontAwesomeIcon>
                    </span>
                </div>
                { goTopBtn &&
                    <button onClick={goToTop} className='hidden md:block'>
                    <FontAwesomeIcon icon={faArrowUp} className='text-white bg-orange-400 py-4 px-6 text-center right-4
                     bottom-24 fixed'></FontAwesomeIcon>
                </button>
                }
                
            </div>
        </>
    );
};

export default Footer;