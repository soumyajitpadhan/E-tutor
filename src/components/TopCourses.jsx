import React from 'react';
import { Star } from "lucide-react";
import CourseImages1 from '../assets/CourseImages1.png';
import CourseImages2 from '../assets/CourseImages2.png';
import CourseImages3 from '../assets/CourseImages3.png';
import CourseImages4 from '../assets/CourseImages4.png';
import CourseImages5 from '../assets/CourseImages5.png';
import CourseImages6 from '../assets/CourseImages6.png';
import CourseImages7 from '../assets/CourseImages7.png';
import CourseImages8 from '../assets/CourseImages8.png';
import CourseImages9 from '../assets/CourseImages9.png';
import CourseImages10 from '../assets/CourseImages10.png';

const courses = [
    {
        "category": "DESIGN",
        "title": "Machine Learning A-Z™: Hands-On Python & R In Data...",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages1,
        "background": "bg-red-100",
        "color": "text-amber-800"
    },
    {
        "category": "DEVELOPMENTS",
        "title": "The Complete 2021 Web Development Bootcamp",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages2,
        "background": "bg-purple-100",
        "color": "text-purple-500"
    },
    {
        "category": "BUSINESS",
        "title": "Learn Python Programming Masterclass",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages3,
        "background": "bg-green-100",
        "color": "text-green-500"
    },
    {
        "category": "MARKETING",
        "title": "The Complete Digital Marketing Course - 12 Courses in 1",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages4,
        "background": "bg-purple-100",
        "color": "text-purple-500"
    },
    {
        "category": "IT & SOFTWARE",
        "title": "Reiki Level I, II and Master/Teacher Program",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages5,
        "background": "bg-red-100",
        "color": "text-red-500"
    },
    {
        "category": "MUSIC",
        "title": "The Complete Foundation Stock Trading Course",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages6,
        "background": "bg-red-100",
        "color": "text-amber-800"
    },
    {
        "category": "MARKETING",
        "title": "Beginner to Pro in Excel: Financial Modeling and Valuati...",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages7,
        "background": "bg-purple-100",
        "color": "text-purple-500"
    },
    {
        "category": "HEALTH & FITNESS",
        "title": "The Python Mega Course: Build 10 Real World Applications",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages8,
        "background": "bg-green-100",
        "color": "text-green-500"
    },
    {
        "category": "DESIGN",
        "title": "Copywriting - Become a Freelance Copywriter, your ow...",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages9,
        "background": "bg-purple-100",
        "color": "text-purple-500"
    },
    {
        "category": "LIFESTYLE",
        "title": "Google Analytics Certification - Learn How To Pass The Exam",
        "price": "$57",
        "rating": 5.0,
        "students": "265.7K",
        "image": CourseImages10,
        "background": "bg-red-100",
        "color": "text-red-500"
    }
];

const TopCourses = () => {
    return (
        <div className='bg-[#F5F7FA] px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto py-10">
                <div className="mb-10 text-center">
                    <p className="text-3xl sm:text-4xl font-semibold">Best Selling Courses</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white shadow-md overflow-hidden">
                            <div className="w-full h-40 flex items-center justify-center bg-gray-200">
                                <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <div className='flex items-center justify-between px-3 py-2'>
                                    <p className={`text-xs font-semibold ${course.background} ${course.color} px-2 py-1 rounded`}>{course.category}</p>
                                    <p className="text-md font-bold text-[#FF6636]">{course.price}</p>
                                </div>
                                <h3 className=" text-base md:text-xs xl:text-sm font-semibold line-clamp px-3 py-1">{course.title}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-700 mt-2 border-t border-gray-200 px-3 py-2">
                                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" fill='orange' stroke='orange' />{course.rating}</span>
                                    <span className="font-semibold">{course.students} <span className='text-gray-400'>students</span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCourses;
