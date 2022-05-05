import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaravan, faCarSide, faKey, faTaxi } from '@fortawesome/free-solid-svg-icons';
import Cars from '../Cars/Cars';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useCars from '../../CustomHook/useCars';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const [cars, setCars, loading] = useCars('http://localhost:5000/cars');

    return loading ? ( <Loading/> ) : (
        <>     
            {/* Banner Section  */}
            <div className='max-w-full overflow-hidden'>
                <Slider {...settings}>
                    <div className='banner-1'>
                        <div className='text-white px-12 flex flex-col justify-center h-full'>
                            <p className='font-bold text-3xl'>Limited Edition</p>
                            <h1 className='text-9xl'>BMW X6</h1>
                            <h2 className='font-semibold pt-8'> <span className='text-5xl '>$225</span>/Month</h2>
                            <p className='pt-4'>$0 first payment paid by Porsche up to $325.</p>
                            <p>Taxes, title and fees extra</p>
                            <span className='mt-12 border py-4 w-1/6 text-center font-semibold uppercase'> Learn More </span>
                        </div>
                    </div>
                    <div className='banner-2' >
                        <h3 className=''>2</h3>
                    </div>
                    <div className='banner-3'>
                        <h3 className=''>3</h3>
                    </div>
                </Slider>
            </div>

            {/* Looking For  */}
            <section className='bg-[#E5EAED]'>
                <div className='text-center'>
                    <p className='text-3xl pt-8'>
                        What are you looking for?
                    </p>
                    <p className='text-base mt-4 text-slate-500 car-deals'>Best Car Deals</p>
                </div>
                <div className='flex px-20 gap-12 text-center mt-8'>
                    <div className='p-12 border-r-[1px]'>
                        <div>
                            <p className='bg-orange-300 rounded-full w-[50px] h-[45px] text-center font-[900] p-2 text-white text-2xl relative left-[55%]
                            '>$</p>
                            <FontAwesomeIcon icon={faCarSide} className='fa-3x '></FontAwesomeIcon>

                        </div>
                        <p className='my-4'>Car Sale</p>
                        <p className='text-[#74787B]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, unde!</p>
                    </div>
                    <div className='p-12 border-r-[1px]'>
                        <div>
                            <p className='bg-amber-500 rounded-full w-[50px] h-[45px] text-center font-[900] p-2 text-white text-2xl relative left-[55%]
                            '><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></p>
                            <FontAwesomeIcon icon={faCaravan} className='fa-3x '></FontAwesomeIcon>

                        </div>
                        <p className='my-4'>Car Buy</p>
                        <p className='text-[#74787B]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, unde!</p>
                    </div>
                    <div className='p-12'>
                        <div>
                            <p className='bg-emerald-500 rounded-full w-[50px] h-[45px] text-center font-[900] p-2 text-white text-2xl relative left-[55%]
                            '>R</p>
                            <FontAwesomeIcon icon={faTaxi} className='fa-3x '></FontAwesomeIcon>

                        </div>
                        <p className='my-4'>Car Rent</p>
                        <p className='text-[#74787B]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, unde!</p>
                    </div>

                </div>
            </section>

            {/* Our CArs  */}
            <section className='mt-12'>
                <div className='text-center'>
                    <p className='text-3xl'>
                        Featured Car Deals
                    </p>
                    <p className='text-base mt-4 text-slate-500 car-deals'>Best Car Deals</p>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-16 px-12'>

                    {
                        cars.slice(0,6).map(car =>
                            <Cars key={car._id}
                                car={car}>

                            </Cars>
                        )
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='/manageInventory'>
                        <button className='my-4 py-2 border-4 border-blue-300 text-center cursor-pointer rounded-lg px-4 bg-blue-300 hover:bg-blue-400 hover:border-blue-400 hover:duration-500'> Manage Inventories</button>
                    </Link>
                </div>

            </section>

            {/* Excellent Dealership  */}
            <section className='delearship px-20 py-28'>
                <div className='flex '>
                    <div className='text-white pr-48 basis-1/2'>
                        <p className='text-2xl text-orange-400 uppercase tracking-wider'>Vintage Exotic Cars</p>
                        <p className='text-5xl font-extrabold pt-8'>EXCELLENT
                            CAR DEALERSHIP</p>
                        <p className='py-10'>Corify is a leading two-sided digital automotive dealership that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.</p>
                        <p className='signature text-4xl'> Pricila</p>
                        <p className='py-2 text-orange-400'>Tasnim Pricila</p>
                        <p className='text-sm'>Director of Vintage Exotic
                        </p>
                    </div>
                    <div className='grid grid-cols-2 text-white gap-20 place-content-center'>
                        <div>
                            <p className='text-6xl font-bold mb-4 text-orange-400 relative'>
                                500+</p>
                            <p className=''>VEHICLES AVAILABLE RIGHT NOW</p>
                        </div>
                        <div>
                            <p className='text-6xl font-bold mb-4 text-orange-400'>250+</p>
                            <p>HAPPY &#38; TRUSTED CUSTOMERS</p>
                        </div>
                        <div>
                            <p className='text-6xl font-bold mb-4 text-orange-400'>114</p>
                            <p>CAR MAKES AND MODELS

                            </p>
                        </div>
                        <div>
                            <p className='text-6xl font-bold mb-4 text-orange-400'>52</p>
                            <p>RECOGNITION AND AWARDS</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;