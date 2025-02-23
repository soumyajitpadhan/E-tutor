import React from "react";
import CTA_Instructor from "../assets/CTA_Instructor.png";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <div className="bg-[#F5F7FA] py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                {/* Left Section */}
                <div className=" h-[400px] md:h-auto relative flex flex-col items-center md:flex-row md:items-start bg-gradient-to-r from-[#CC522B] to-[#FF6636] text-white p-6 md:p-8">
                    <div className="max-w-xs text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Become an instructor</h2>
                        <p className="mb-6 text-sm">
                            Instructors from around the world teach millions of students on Udemy.
                            We provide the tools and skills to teach what you love.
                        </p>
                        <button className="bg-white text-orange-500 px-5 py-2 font-semibold cursor-pointer flex items-center justify-center gap-2 mx-auto md:mx-0">
                            Start Teaching <ArrowRight size={20} className="mt-1" />
                        </button>
                    </div>
                    <div className="mt-6 md:mt-0 md:w-1/3 w-full flex justify-center md:justify-end absolute bottom-0 md:right-6">
                        <img src={CTA_Instructor} alt="Instructor" className="w-44 sm:w-auto" />
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-left">Your teaching & earning steps</h3>
                    <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2">
                        {[
                            { step: 1, text: "Apply to become an instructor", color: "text-blue-500", background: "bg-blue-100" },
                            { step: 2, text: "Build & edit your profile", color: "text-red-500", background: "bg-red-100" },
                            { step: 3, text: "Create your new course", color: "text-orange-500", background: "bg-orange-100" },
                            { step: 4, text: "Start teaching & earning", color: "text-green-500", background: "bg-green-100" },
                        ].map(({ step, text, color, background }) => (
                            <div key={step} className="flex items-center">
                                <span className={`font-bold text-lg md:text-xl ${color} ${background} p-5 md:p-6 w-10 h-10 flex items-center justify-center rounded-full mr-4`}>
                                    {step}
                                </span>
                                <p className="text-gray-700 text-sm md:text-base">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;
