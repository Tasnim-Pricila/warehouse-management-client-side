import React from 'react';
import Slider from 'react-slick';
import './Home.css';

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
                <div  className='banner-2' >
                    <h3 className=''>2</h3>
                </div>
                <div  className='banner-3'>
                    <h3 className=''>3</h3>
                </div>
            </Slider>
        </>
    );
};

export default Home;