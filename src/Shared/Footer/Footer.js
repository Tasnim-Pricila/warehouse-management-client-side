import { faFacebook, faFacebookF, faInstagram, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faArrowRight, faEnvelope, faLocationDot, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const myDate = new Date();
    const year = myDate.getFullYear();
    // console.log(year);
    return (
        <>
            <div className='grid grid-cols-4 bg-[#202424] px-20 py-20 text-[#7a8395] 
            gap-8'>
                <div>
                    <p className='text-xl text-orange-600 uppercase '>Vintage Exotic Cars</p>
                    <p className='text-sm py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum facere dolores facilis autem, numquam neque nisi et quod suscipit unde, maiores excepturi soluta iure, tempora sed molestias ad esse.</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex'>
                            <FontAwesomeIcon icon={faLocationDot} className='pr-2 pt-1'></FontAwesomeIcon>
                            <p>3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</p>
                        </div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={faEnvelope} className='pr-2 pt-1'></FontAwesomeIcon>
                            <p>info@wheels-control.com</p>
                        </div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={faPhone} className='pr-2 pt-1'></FontAwesomeIcon>
                            <p>01711236578</p>
                        </div>
                    </div>

                </div>
                <div className='justify-self-center'>
                    <p className='text-xl text-white uppercase pb-8'>Links</p>
                    <div className='flex flex-col gap-4'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Home</Link>
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
                    <p className='text-xl text-white uppercase pb-8'>Help Center</p>
                    <p className='mb-6'>Subscribe to our newsletter to get the latest cars discount promotions and other latest news stay updated.</p>
                    <div className='flex items-center'>
                        <input type="email" name="email" id="email" placeholder='Email Address' className='py-4 pl-4 w-64 outline-none' />
                        <FontAwesomeIcon icon={faAngleRight} className='bg-orange-400 fa-2x px-4 py-[12px] cursor-pointer text-white'></FontAwesomeIcon>
                    </div>

                    <p className='italic mt-4'>Don't worry! We don't spam</p>
                </div>
            </div>
            <div className='flex justify-between items-center bg-[#202424] px-20 py-12 text-[#7a8395]'>
                <p>&copy; {year} Vinatge Exotics Made with <span className='text-orange-600 px-2'> &#10084;</span>	 by <span className='text-white pl-2'>Pricila</span> </p>
                <div className='flex gap-6 items-center'>
                    <p>Follow Us On</p>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </div>
            </div>
        </>
    );
};

export default Footer;