"use client"
import Image from 'next/image';
import React from 'react'

const Hero = () => {
    return (
        <div className="relative flex flex-col items-start justify-center py-5 bg-orange-500 overflow-hidden px-5">
            {/* Background with opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/lines.png')] bg-end opacity-40 z-0"></div>
            <div className='container mx-auto'>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20 rounded-full"></div>
                <section className="flex justify-between w-full">

                    <div className="flex flex-col items-center justify-center py-8 lg:py-16">
                        <div className=" max-w-screen-sm text-center flex flex-col items-center justify-center">
                            <h1 className="mb-4 text-3xl uppercase font-extrabold tracking-tight text-white sm:text-5xl md:text-8xl transform transition-all animate-bouncy">
                                <span>The 3PL </span>
                                <span>that Puts You First</span>
                            </h1>
                            <p className="mb-8 hidden text-sm md:block font-normal text-white md:text-xl w-4/6 transform transition-all opacity-0 animate-fadeInDelay">
                                Get personalized and transparent fulfillment for growing your brand to the next level.
                            </p>
                        </div>

                        <div className='w-4/6 z-10'>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-lg bg-orange-600 text-sm p-1 md:px-5 md:py-3 md:text-center md:text-base font-medium text-white hover:bg-orange-700 focus:ring-4 focus:ring-white dark:focus:ring-orange-500 transform transition-all hover:scale-105 hover:rotate-3 duration-300"
                            >
                                Get Started
                                <svg className="ml-2 -mr-1 h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 12h16M12 4l8 8-8 8"></path>
                                </svg>
                            </a>
                        </div>

                    </div>

                    <div className="mx-5 z-10 flex flex-col justify-end space-y-20 md:justify-around items-end">
                        <h1 className="md:text-2xl text-xl p-1 bg-orange-600 font-semibold text-white md:px-14 md:py-2 rounded-2xl transform transition-all hover:scale-105 duration-300">
                            +1 {'(410)'} 609-8713
                        </h1>

                        <div >
                            <Image
                                className="rounded-full border-4 border-transparent shadow-[0_0_20px_rgba(0,0,0,0.3),0_0_30px_rgba(0,0,0,0.1),0_0_40px_rgba(0,0,0,0.05)]"
                                src={'/images/workersImage.jpg'}
                                alt="workers"
                                width={600}
                                height={200}
                            />
                        </div>
                    </div>

                </section>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-white opacity-10 rounded-t-full animate-wave"></div>
            </div>
            <style jsx>{`
                @keyframes bouncy {
                    0% { transform: translateY(-10px); }
                    50% { transform: translateY(10px); }
                    100% { transform: translateY(-10px); }
                }
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }

                @keyframes pulse {
                    0% { opacity: 0.1; }
                    25% { opacity: 0.5; }
                    50% { opacity: 0.1; }
                }

                .animate-bouncy {
                    animation: bouncy 1.5s ease-in-out infinite;
                }
                .animate-fadeInDelay {
                    animation: fadeIn 2s ease-out forwards;
                }

            `}</style>
        </div>
    );
};

export default Hero;
