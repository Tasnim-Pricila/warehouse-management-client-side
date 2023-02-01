import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaravan, faCarSide, faKey, faTaxi } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
            <section className='bg-[#E5EAED] max-w-full overflow-hidden'>
                <div data-aos="zoom-in" className='text-center'>
                    <p className='md:text-3xl text-2xl pt-12'>
                        What are you looking for?
                    </p>
                    <p className='text-base mt-4 text-slate-500 blue-line'>Best Car Deals</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:px-20 md:gap-12 text-center mt-8'>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="50" className='p-12 border-r-[1px]'>
                        <div>
                            <p className='bg-orange-300 rounded-full w-[50px] h-[45px] text-center font-[900] p-2 text-white text-2xl relative left-[55%]
                            '>$</p>
                            <FontAwesomeIcon icon={faCarSide} className='fa-3x '></FontAwesomeIcon>
                        </div>
                        <p className='my-4'>Car Sale</p>
                        <p className='text-[#74787B]'>Standardize the communication process and boost new and used car sales with these 16 most effective companies.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="50" className='p-12 border-r-[1px]'>
                        <div>
                            <p className='bg-amber-500 rounded-full w-[50px] h-[45px] text-center font-[900] p-2 text-white text-2xl relative left-[55%]
                            '><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></p>
                            <FontAwesomeIcon icon={faCaravan} className='fa-3x '></FontAwesomeIcon>

                        </div>
                        <p className='my-4'>Car Buy</p>
                        <p className='text-[#74787B]'>Standardize the communication process and boost new and used car sales with these 16 most effective companies.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="50" className='p-12'>
                        <div>
                            <p className='bg-emerald-500 rounded-full w-[50px] h-[45px] text-center font-[900] p-2 text-white text-2xl relative left-[55%]
                            '>R</p>
                            <FontAwesomeIcon icon={faTaxi} className='fa-3x '></FontAwesomeIcon>

                        </div>
                        <p className='my-4'>Car Rent</p>
                        <p className='text-[#74787B]'>Book a rental car from Extension Airport and start your adventure as soon as you land.</p>
                    </div>

                </div>
            </section>
    );
};

export default Services;