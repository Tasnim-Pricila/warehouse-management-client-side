import React from 'react';
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

    // Banner Array
    const carsBanner = [
        {
            image: 'https://i.ibb.co/pvBMcvf/banner-4.webp',
            smallTitle: 'Limited Edition',
            title: 'BMW X6',
            description: '$0 first payment paid by Porsche up to $325.',
            pricingText: '$225 /Month',
            features: 'Taxes, title and fees extra',
        },
        {
            image: 'https://i.ibb.co/SB2nXYz/banner-2.webp',
            smallTitle: 'Limited Edition',
            title: 'JAGUAR XJ',
            description: '$0 first payment paid by Porsche up to $325.',
            pricingText: '$235 /Month',
            features: 'Taxes, title and fees extra',
        },
        {
            image: 'https://i.ibb.co/GFqFCtv/banner-3.webp',
            smallTitle: 'Limited Edition',
            title: 'Marchediz',
            description: '$0 first payment paid by Porsche up to $325.',
            pricingText: '$245 /Month',
            features: 'Taxes, title and fees extra',
        },
    ]


    const [cars, setCars, loading] = useCars('http://localhost:5000/cars');

    return  (
        <>
            {/* Banner Section  */}
            <Slider {...settings} className='max-w-full overflow-hidden'>
                {
                    carsBanner.map ((banner, index) =>
                        <div key={index}>
                            <div style={{ backgroundImage: `url('${banner.image}')` }} className='bg-cover h-[95vh] bg-no-repeat bg-blend-overlay md:bg-[#0000001c] bg-[#00000063] bg-center object-cover'>
                                <div className='text-white md:px-20 px-4 flex flex-col justify-center h-full'>
                                    <p className='font-bold md:text-3xl md:pl-2'>{banner.smallTitle}</p>
                                    <h1 className='md:text-9xl text-5xl'>{banner.title}</h1>
                                    <h2 className='font-semibold pt-8'> 
                                        <span className='text-5xl text-[#29d17d]'>
                                            {banner.pricingText.split(' ')[0]}
                                        </span>
                                            {banner.pricingText.split(' ')[1]}
                                    </h2>
                                    <p className='pt-4'>{banner.description}</p>
                                    <p>{banner.features}</p>
                                    <span className='mt-12 border py-4 md:w-1/6 w-1/2 text-center uppercase cursor-pointer hover:bg-orange-400 hover:border-orange-400 hover:duration-500 tracking-wider font-semibold'> Learn More </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Slider>

            {/* Looking For  */}
            <section className='bg-[#E5EAED]'>
                <div className='text-center'>
                    <p className='md:text-3xl text-2xl pt-8'>
                        What are you looking for?
                    </p>
                    <p className='text-base mt-4 text-slate-500 car-deals'>Best Car Deals</p>
                </div>
                <div className='flex md:flex-row flex-col md:px-20 md:gap-12 text-center mt-8'>
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
            <section className='mt-12 '>
                <div className='text-center'>
                    <p className='text-3xl'>
                        Featured Car Deals
                    </p>
                    <p className='text-base mt-4 text-slate-500 car-deals'>Best Car Deals</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-16 md:px-12 px-2'>

                    {
                        cars.slice(0, 6).map(car =>
                            <Cars key={car._id}
                                car={car}>
                            </Cars>
                        )
                    }
                </div>
                <div className='flex justify-center my-4'>
                    <Link to='/manageInventory'>
                        <button className='my-4 py-2 border-4 border-blue-300 text-center cursor-pointer rounded-lg px-4 bg-blue-300 hover:bg-blue-400 hover:border-blue-400 hover:duration-500'> Manage Inventories</button>
                    </Link>
                </div>

            </section>

            {/* Excellent Dealership  */}
            <section className='delearship md:px-20 py-28 bg-center bg-blend-overlay 
            bg-[#00000094] md:bg-[#00000000]'>
                <div className='flex md:flex-row flex-col'>
                    <div className='text-white md:pr-48 basis-1/2 px-4 md:px-0'>
                        <p className='text-2xl text-orange-400 uppercase tracking-wider'>Vintage Exotic Cars</p>
                        <p className='md:text-5xl text-4xl font-extrabold pt-8'>EXCELLENT
                            CAR DEALERSHIP</p>
                        <p className='py-10 text-justify'>Corify is a leading two-sided digital automotive dealership that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.</p>
                        <p className='signature text-4xl'> Pricila</p>
                        <p className='py-2 text-orange-400'>Tasnim Pricila</p>
                        <p className='text-sm'>Director of Vintage Exotic
                        </p>
                    </div>
                    <div className='grid grid-cols-2 text-white gap-20 place-content-center my-8 px-4 md:my-0 md:px-0'>
                        <div>
                            <p className='md:text-6xl text-5xl font-bold mb-4 text-orange-400 relative'>
                                500+</p>
                            <p className=''>VEHICLES AVAILABLE RIGHT NOW</p>
                        </div>
                        <div>
                            <p className='md:text-6xl text-5xl font-bold mb-4 text-orange-400'>250+</p>
                            <p>HAPPY &#38; TRUSTED CUSTOMERS</p>
                        </div>
                        <div>
                            <p className='md:text-6xl text-5xl font-bold mb-4 text-orange-400'>114</p>
                            <p>CAR MAKES AND MODELS

                            </p>
                        </div>
                        <div>
                            <p className='md:text-6xl text-5xl font-bold mb-4 text-orange-400'>52</p>
                            <p>RECOGNITION AND AWARDS</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;