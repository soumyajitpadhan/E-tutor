import React, { useState } from "react";
import { ChevronDown, Search, Bell, Heart, ShoppingCart, Menu, X } from "lucide-react";
import GraduationCap from "../assets/GraduationCap.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full">
            {/* Top Navbar (Only visible on large screens) */}
            <div className="hidden lg:flex justify-between px-12 py-4 bg-[#1D2026] text-[#A1A5B3]">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition">Home</a>
                    <a href="#" className="hover:text-white transition">Courses</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                    <a href="#" className="hover:text-white transition">Become an Instructor</a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="flex items-center gap-1">
                        USD <ChevronDown size={15} />
                    </a>
                    <a href="#" className="flex items-center gap-1">
                        English <ChevronDown size={15} />
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="flex justify-between items-center px-6 lg:px-12 py-4 border-b border-gray-300">
                {/* Left Section (Logo + Browse Button) */}
                <div className="flex items-center gap-5">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={GraduationCap} alt="GraduationCap" className="w-[40px]" />
                        <a href="#" className="text-[#1D2026] text-2xl font-semibold">
                            E-tutor
                        </a>
                    </div>

                    {/* Browse + Search (Only visible on large screens) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="flex items-center gap-4 xl:gap-20 border border-gray-200 px-3 h-10 text-gray-600 hover:bg-gray-100 transition">
                            Browse <ChevronDown size={17} />
                        </button>
                        <button className="flex items-center gap-3 border border-gray-200 px-3 h-10 text-gray-500 text-sm w-[250px] lg:w-[280px] xl:w-[350px]">
                            <Search size={20} />
                            What do you want to learn...
                        </button>
                    </div>
                </div>

                {/* Right Section (Icons + Auth Buttons) */}
                <div className="hidden lg:flex items-center gap-4">
                    <Bell size={20} className="cursor-pointer text-gray-500 hover:text-black transition" />
                    <Heart size={20} className="cursor-pointer text-gray-500 hover:text-black transition" />
                    <ShoppingCart size={20} className="cursor-pointer text-gray-500 hover:text-black transition" />
                    <div className="flex gap-3">
                        <button className="w-36 h-10 bg-[#FFEEE8] text-[#FF6636] text-sm font-semibold hover:bg-[#ffd8c2] transition cursor-pointer">
                            Create Account
                        </button>
                        <button className="w-24 bg-[#FF6636] text-white font-semibold px-4 py-2 hover:bg-[#e65530] transition cursor-pointer">
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Medium & Small Screen Menu Button (Visible on md and below) */}
                <button className="lg:hidden text-gray-600 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile & Medium Screen Navigation (Collapsible) */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#1D2026] text-white flex flex-col items-start py-4 px-6 space-y-4">
                    <a href="#" className="w-full py-1 px-2 rounded-md hover:bg-gray-500 transition">Home</a>
                    <a href="#" className="w-full py-1 px-2 rounded-md hover:bg-gray-500 transition">Courses</a>
                    <a href="#" className="w-full py-1 px-2 rounded-md hover:bg-gray-500 transition">About</a>
                    <a href="#" className="w-full py-1 px-2 rounded-md hover:bg-gray-500 transition">Contact</a>
                    <a href="#" className="w-full py-1 px-2 rounded-md hover:bg-gray-500 transition">Become an Instructor</a>
                    <div className="flex flex-col space-y-4 px-2">
                        <div className="flex gap-5">
                            <a href="#" className="flex items-center gap-1">USD <ChevronDown size={15} /></a>
                            <a href="#" className="flex items-center gap-1">English <ChevronDown size={15} /></a>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-36 h-10 bg-[#FFEEE8] text-[#FF6636] text-sm font-semibold hover:bg-[#ffd8c2] transition cursor-pointer">
                                Create Account
                            </button>
                            <button className="w-24 bg-[#FF6636] text-white font-semibold px-4 py-2 hover:bg-[#e65530] transition cursor-pointer">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
