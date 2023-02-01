import React from 'react';
import black from '../../images/black.png'


const About = () => {
    return (
        <section style={{ backgroundImage: `url('${black}')` }} className='bg-cover h-[150vh] bg-no-repeat md:px-20 py-28 bg-center bg-blend-overlay 
        bg-[#00000094] md:bg-[#00000000] max-w-full overflow-hidden'>
            <div className='flex md:flex-row flex-col' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="80">
                <div className='text-white md:pr-48 basis-1/2 px-4 md:px-0'>
                    <p className='text-2xl text-orange-400 uppercase tracking-wider'>Vintage Exotic Cars</p>
                    <p className='md:text-5xl text-4xl font-extrabold pt-8'>EXCELLENT
                        CAR DEALERSHIP</p>
                    <p className='py-10 text-justify'>Vintage Exotic is a leading two-sided digital automotive dealership that connects car shoppers with sellers. Launched in 1998 and headquartered in Bangladesh, the company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.</p>
                    <p className='signature text-4xl'> Pricila</p>
                    <p className='py-2 text-orange-400'>Tasnim Pricila</p>
                    <p className='text-sm'>Director of Vintage Exotic
                    </p>
                </div>
                <div className='grid grid-cols-2 text-white gap-20 place-content-center my-8 px-4 md:my-0 md:px-0'>
                    <div>
                        <p className='md:text-6xl text-5xl font-bold mb-4 text-orange-400 relative'>
                            500+ </p>
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
    );
};

export default About;