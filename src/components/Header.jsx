import React from 'react'
import Header_Image from '../assets/Header_Image.png'

const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 py-4">
            {/* Text Section */}
            <div className="w-full lg:w-2xl xl:w-5xl text-center lg:text-left px-12">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-semibold text-[#1D2026] leading-tight xl:leading-none">
                    Learn with expert anytime anywhere
                </p>
                <p className="text-[#4E5566] my-4 xl:my-6 xl:w-sm">
                    Our mission is to help people find the best online courses and learn with experts anytime, anywhere.
                </p>
                <button className="bg-[#FF6636] text-white w-40 h-12 font-semibold cursor-pointer hover:bg-[#e65530] transition">
                    Create Account
                </button>
            </div>

            {/* Image Section */}
            <div className="w-full flex justify-center lg:justify-end">
                <img 
                    src={Header_Image} 
                    alt="Header Image" 
                    className="max-w-full h-auto xl:w-[850px] xl:h-[548px]" 
                />
            </div>
        </div>
    )
}

export default Header
