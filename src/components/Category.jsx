import React from 'react';
import { MoveRight } from 'lucide-react';
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';
import Frame4 from '../assets/Frame4.png';
import Frame5 from '../assets/Frame5.png';
import Frame6 from '../assets/Frame6.png';
import Frame7 from '../assets/Frame7.png';
import Frame8 from '../assets/Frame8.png';
import Frame9 from '../assets/Frame9.png';
import Frame10 from '../assets/Frame10.png';
import Frame11 from '../assets/Frame11.png';
import Frame12 from '../assets/Frame12.png';

const categories = [
    { name: "Label", courses: "63,476 Courses", color: "bg-purple-100", icon: Frame1 },
    { name: "Business", courses: "52,822 Courses", color: "bg-green-100", icon: Frame2 },
    { name: "Finance & Accounting", courses: "33,841 Courses", color: "bg-orange-100", icon: Frame3 },
    { name: "IT & Software", courses: "22,649 Courses", color: "bg-red-100", icon: Frame4 },
    { name: "Personal Development", courses: "20,126 Courses", color: "bg-orange-100", icon: Frame5 },
    { name: "Office Productivity", courses: "13,932 Courses", color: "bg-gray-100", icon: Frame6 },
    { name: "Marketing", courses: "12,068 Courses", color: "bg-purple-100", icon: Frame7 },
    { name: "Photography & Video", courses: "6,196 Courses", color: "bg-gray-100", icon: Frame8 },
    { name: "Lifestyle", courses: "2,736 Courses", color: "bg-orange-100", icon: Frame9 },
    { name: "Design", courses: "2,600 Courses", color: "bg-red-100", icon: Frame10 },
    { name: "Health & Fitness", courses: "1,678 Courses", color: "bg-green-100", icon: Frame11 },
    { name: "Music", courses: "959 Courses", color: "bg-orange-100", icon: Frame12 },
];

const Category = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-0 py-12 lg:py-28">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Browse Top Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div key={index} className={`p-4 shadow-md ${category.color} flex items-center space-x-4 transition-all hover:scale-105`}>
                        <img src={category.icon} alt={category.name} className='w-12 h-12 sm:w-16 sm:h-16' />
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold">{category.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600">{category.courses}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className='text-sm md:text-base'>We have more categories & subcategories.</span>
                <a href="#" className="text-orange-500 font-semibold flex items-center gap-2 text-sm md:text-base hover:text-orange-600 transition-colors">
                    Browse All <MoveRight size={20} />
                </a>
            </div>
        </div>
    );
};

export default Category;
