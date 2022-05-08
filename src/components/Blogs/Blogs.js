import React from 'react';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.jpg';
import four from '../../images/four.png';
import Title from '../../Shared/Title/Title';

const Blogs = () => {
    return (
        <>
            <Title title='Blogs'></Title>
            <div className='md:px-20 my-16 px-4'>
                <p className='mb-12 text-center text-3xl font-semibold uppercase'>Our Blogs</p>
                <div data-aos="flip-up" data-aos-offset="300"data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="80" className='flex md:gap-8 md:flex-row flex-col border-2 border-amber-400 rounded-lg p-4'>
                    <div className='basis-[50%] flex items-center mb-4 md:mb-0'>
                        <img src={one} alt="" className='w-[500px] mx-auto block'/>
                    </div>
                    <div className='flex flex-col gap-4 md:px-4'>
                        <p className='font-semibold text-2xl'>
                            Difference between Javascript and NodeJs.
                        </p>
                        <div className='flex gap-8 text-orange-500 items-center'>
                            <p className='basis-[50%]'>Javascript </p>
                            <p className='basis-[50%]'>NodeJS .</p>
                        </div>
                        <div className='flex gap-8 mt-4'>
                            <p className='basis-[50%]'>1.Javascript is a programming language.</p>
                            <p className='basis-[50%]'>1.NodeJS is a runtime environment for javascript.</p>
                        </div>
                        <div className='flex gap-8'>
                            <p className='basis-[50%]'>2.Javascript is a programming language.</p>
                            <p className='basis-[50%]'>2.NodeJS is a runtime environment for javascript.</p>
                        </div>
                        <div className='flex gap-8'>
                            <p className='basis-[50%]'>3.JAvascript is used in frontend Development.</p>
                            <p className='basis-[50%]'>3.NodeJs is mostly used in backend development.</p>
                        </div>
                        <div className='flex gap-8'>
                            <p className='basis-[50%]'>4.JAvascript can add HTML.</p>
                            <p className='basis-[50%]'>4.NodeJS can not add HTML</p>
                        </div>
                        <div className='flex gap-8'>
                            <p className='basis-[50%]'>5.JAvascript is wriiten in C++</p>
                            <p className='basis-[50%]'>5.NodeJS is wriiten in  c, C++ and Javascript.</p>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-12 my-12'>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" data-aos-delay="80" className='flex flex-col border-2 border-amber-400 rounded-lg p-4'>
                        <div className='flex items-center'>
                            <img src={two} alt="" className='w-full md:h-[350px] mx-auto block ' />
                        </div>
                        <div className='flex flex-col gap-4 '>
                            <p className='font-semibold text-2xl mt-4'>When should you use nodejs and when should you use mongodb?</p>
                            <p className='text-justify'>NodeJS is a JavaScript runtime environment. It actually helps    JavaScript to run outside of the server. It's used in server-side development. <br />
                            MongoDB is a NoSQL database that is used to store data. Documents are stored in MongoDB in JSON format. <br />
                            If I am creating a website and I need a database to store the data, here I can use MongoDB. But to connect with MongoDB I need a connector and here I can use NodeJS which will help my website to run outside of the server.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="1000" data-aos-delay="80" className='flex flex-col border-2 border-amber-400 rounded-lg p-4'>
                        <div className='flex items-center' >
                            <img src={three} alt="" className='w-full md:h-[350px] mx-auto block ' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-semibold text-2xl mt-4'>Differences between sql and nosql databases.</p>
                            <div className='flex gap-8 text-orange-500 items-center'>
                                <p className='basis-[50%]'>SQL </p>
                                <p className='basis-[50%]'>NoSQL</p>
                            </div>
                            <div className='flex gap-8 mt-4'>
                                <p className='basis-[50%]'>1. SQl is Relational Database</p>
                                <p className='basis-[50%]'>1. NoSQl is Non-Relational Database</p>
                            </div>
                            <div className='flex gap-8'>
                                <p className='basis-[50%]'>2. SQL is table based database.</p>
                                <p className='basis-[50%]'>2. NoSQL is document based database.</p>
                            </div>
                            <div className='flex gap-8'>
                                <p className='basis-[50%]'>3. SQL databases are less flexible.</p>
                                <p className='basis-[50%]'>3. NoSQL database are more flexible.</p>
                            </div>
                            <div className='flex gap-8'>
                                <p className='basis-[50%]'>4. MySQL is a SQl database.</p>
                                <p className='basis-[50%]'>4. Mongodb is NOSQL database.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" data-aos-delay="80" className='flex md:flex-row flex-col gap-8 items-center border-2 border-amber-400 rounded-lg p-4'>
                    <div className='basis-[50%] md:pr-32 text-justify order-2'>
                        <p className='font-semibold text-2xl mb-4 '>What is the purpose of jwt and how does it work</p>
                        JWT is mainly used for authorization purposes between client and server
                        When the client login with a username and password, the server creates a token for the client. Client stores the token on local storage or browser cookies.
                        After that, when a client makes a request, a copy of the token is sent to the server for authorization.The server verifies the JWT token and send response to the client if the token is correct.
                    </div>
                    <div className='basis-[50%] flex items-center'>
                        <img src={four} alt="" className='w-[600px] mx-auto block ' />
                    </div>

                </div>
            </div>

        </>
    );
};

export default Blogs;