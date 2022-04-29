import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import img1 from '../../images/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
    };

    return (
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


            {/* Our CArs  */}

            <section className='mt-12'>
                <div className='text-center'>
                    <p className='text-3xl'>
                        Featured Car Deals
                    </p>
                    <p className='text-base mt-4 text-slate-500 car-deals'>Best Car Deals</p>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-16 px-12'>
                    <div className='border p-8 rounded-3xl'>
                        <img src={img1} alt="" className='border rounded-3xl h-1/2 mx-auto' />
                        <p className='text-2xl mt-4'>Porsche</p>
                        <p className=' mt-2'>
                            <FontAwesomeIcon icon={faUserCircle} className='text-slate-500'></FontAwesomeIcon>
                            <span className='text-slate-500 pl-2'>Vendor:</span> Tasnim Tanzim
                        </p>
                        <p className='text-slate-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, omnis.</p>
                        
                        <div className='flex justify-between mt-2'>
                            <p className='text-2xl italic text-[#09a0f7] font-semibold'>$5,500</p>
                            <p>Quantity: <span className='text-[#09a0f7]'>10</span></p>
                        </div>

                        <p className='mt-4 py-2 border-4 border-amber-400 text-center'> Manage</p>
                    </div>
                </div>
            </section>

            <section className='mt-12'>
                <div className='text-center'>
                    <p className='text-3xl'>
                        Featured Car Deals
                    </p>
                    <p className='text-base mt-4 text-slate-500 car-deals'>Best Car Deals</p>
                </div>
            </section>
        </>
    );
};

export default Home;