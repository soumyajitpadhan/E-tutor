import React from "react";
import CompanyLogo1 from "../assets/CompanyLogo1.png";
import CompanyLogo2 from "../assets/CompanyLogo2.png";
import CompanyLogo3 from "../assets/CompanyLogo3.png";
import CompanyLogo4 from "../assets/CompanyLogo4.png";
import CompanyLogo5 from "../assets/CompanyLogo5.png";
import CompanyLogo6 from "../assets/CompanyLogo6.png";
import CompanyLogo7 from "../assets/CompanyLogo7.png";
import CompanyLogo8 from "../assets/CompanyLogo8.png";

const TrustedCompanies = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <p className="text-3xl font-semibold">6.3k Trusted Companies</p>
                        <p className="text-sm text-gray-500 mt-3">
                            Industry leaders trust E-Tutor to upskill their workforce with interactive and personalized learning solutions.
                        </p>
                    </div>

                    {/* Logos Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                        {[CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4, CompanyLogo5, CompanyLogo6, CompanyLogo7, CompanyLogo8].map(
                            (logo, index) => (
                                <div key={index} className="flex items-center justify-center bg-white w-full h-20 p-4 shadow-xs">
                                    <img src={logo} alt={`CompanyLogo${index + 1}`} className="w-28 h-14 object-contain" />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompanies;
