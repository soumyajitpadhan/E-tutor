import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, ChevronDown } from 'lucide-react';
import GraduationCap from '../assets/GraduationCap.png';
import DownloadOurApp1 from '../assets/DownloadOurApp1.png';
import DownloadOurApp2 from '../assets/DownloadOurApp2.png';

const Footer = () => {
    return (
        <div className='bg-[#1D2026] text-white'>
            {/* First Section */}
            <div className='max-w-7xl m-auto flex flex-wrap justify-between py-16 items-center px-5 md:px-8'>
                <div className='w-full md:w-1/2 lg:w-[350px] flex flex-col gap-8 text-center md:text-left'>
                    <p className='text-2xl md:text-2xl font-semibold tracking-wide'>Start learning with 67.1k students around the world.</p>
                    <div className='flex flex-wrap justify-center md:justify-start gap-3'>
                        <button className='bg-[#FF6636] px-4 py-2 lg:px-6 lg:py-3 font-semibold cursor-pointer'>Join the Family</button>
                        <button className='bg-[#FFFFFF0D] px-4 py-2 lg:px-6 lg:py-3 font-semibold cursor-pointer'>Browse all courses</button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/2 flex justify-around mt-10 md:mt-0'>
                    {[
                        { label: 'Online courses', value: '6.3k' },
                        { label: 'Certified Instructor', value: '26k' },
                        { label: 'Success Rate', value: '99.9%' }
                    ].map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 text-center'>
                            <p className='text-3xl lg:text-4xl font-semibold'>{item.value}</p>
                            <p className='text-sm font-semibold text-gray-400 tracking-wide'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Section */}
            <div className='border-y border-gray-700'>
                <div className='max-w-7xl m-auto flex flex-wrap md:justify-center lg:flex-nowrap justify-between py-16 items-start gap-10 px-5 lg:px-8 xl:px-0'>
                    {/* Left Section */}
                    <div className='w-full md:w-2/4 lg:w-1/3 xl:w-1/4 flex flex-col md:items-center lg:items-start gap-6'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={GraduationCap} alt="GraduationCap" className='w-[40px]' />
                            <a href="#" className='text-3xl font-semibold'>E-tutor</a>
                        </div>
                        <p className='text-gray-500 text-sm font-semibold text-center lg:text-left'>
                            Empowering students with interactive and personalized learning.
                        </p>
                        <div className='flex gap-3 justify-center'>
                            <div className='bg-[#363B4766] w-10 h-10 flex justify-center items-center cursor-pointer'>
                                <Facebook size={20} />
                            </div>
                            <div className='bg-[#363B4766] w-10 h-10 flex justify-center items-center cursor-pointer'>
                                <Instagram size={20} />
                            </div>
                            <div className='bg-[#FF6636] w-10 h-10 flex justify-center items-center cursor-pointer'>
                                <Linkedin size={20} fill='white' />
                            </div>
                            <div className='bg-[#363B4766] w-10 h-10 flex justify-center items-center cursor-pointer'>
                                <Twitter size={20} />
                            </div>
                            <div className='bg-[#363B4766] w-10 h-10 flex justify-center items-center cursor-pointer'>
                                <Youtube size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='w-full md:w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:px-5 lg:px-8 xl:px-0'>
                        {/* Top 4 Category */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='uppercase text-base font-semibold'>Top 4 Category</h3>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Development</li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Finance & Accounting</li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Design</li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Business</li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='uppercase text-base font-semibold'>Quick Links</h3>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>About</li>
                                <li className='text-sm flex items-center gap-3 font-semibold cursor-pointer'>
                                    <span className='border-b-2 border-orange-500 pb-1'>Become Instructor</span>
                                    <ArrowRight size={16} />
                                </li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Contact</li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Career</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='uppercase text-base font-semibold'>Support</h3>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Help Center</li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>FAQs</li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Terms & Condition</li>
                                <li className='text-sm text-gray-400 font-semibold cursor-pointer'>Privacy Policy</li>
                            </ul>
                        </div>

                        {/* Download our App */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='uppercase text-base font-semibold'>Download our app</h3>
                            <div className='flex flex-col gap-3'>
                                <img src={DownloadOurApp1} alt="DownloadOurApp1" className='w-36 object-cover cursor-pointer' />
                                <img src={DownloadOurApp2} alt="DownloadOurApp2" className='w-36 object-cover cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Third Section */}
            <div className='max-w-7xl m-auto flex flex-col-reverse sm:flex-row justify-between items-center py-4 px-5'>
                <div className='text-center sm:text-left'>
                    <p className='text-[#8C94A3] text-sm sm:text-base font-semibold'>
                        © 2025 - E-Tutor. Designed by <span className='text-white'>Soumyajit Padhan</span>. All rights reserved.
                    </p>
                </div>
                <div className='flex items-center border border-[#363B47] gap-10 sm:gap-20 px-4 py-2 mb-4 sm:mb-0 cursor-pointer'>
                    <p className='text-sm sm:text-lg text-[#8C94A3] font-semibold'>English</p>
                    <ChevronDown size={20} sm:size={25} className='mt-1' />
                </div>
            </div>
        </div>
    );
};

export default Footer;
