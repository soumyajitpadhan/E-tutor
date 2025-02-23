import React from 'react';
import Course1 from '../assets/Course1.png';
import Course2 from '../assets/Course2.png';
import Course3 from '../assets/Course3.png';
import Course4 from '../assets/Course4.png';
import Instructor from '../assets/Instructor.png';
import { User, Star, Clock, BarChart } from 'lucide-react';

const courses = [
    {
        category: 'HEALTH & FITNESS',
        title: 'Investing In Stocks The Complete Course! (13 H...',
        instructor: 'Kevin Gilbert',
        price: 14.0,
        originalPrice: 26.0,
        rating: "5.0",
        reviews: 357914,
        students: '265.7K',
        level: 'Beginner',
        duration: '6 hours',
        image: Course1,
    },
    {
        category: 'PERSONAL DEVELOPMENT',
        title: 'Google Analytics Certification - Learn How To...',
        instructor: 'Kevin Gilbert',
        price: 14.0,
        originalPrice: 26.0,
        rating: "5.0",
        reviews: 357914,
        students: '265.7K',
        level: 'Beginner',
        duration: '6 hours',
        image: Course2,
    },
    {
        category: 'PRODUCTIVITY',
        title: 'Adobe XD for Web Design: Essential Principles ...',
        instructor: 'Kevin Gilbert',
        price: 14.0,
        originalPrice: 26.0,
        rating: "5.0",
        reviews: 357914,
        students: '265.7K',
        level: 'Beginner',
        duration: '6 hours',
        image: Course3,
    },
    {
        category: 'MUSIC',
        title: 'The Python Mega Course: Build 10 Real World ...',
        instructor: 'Kevin Gilbert',
        price: 14.0,
        originalPrice: 26.0,
        rating: "5.0",
        reviews: 357914,
        students: '265.7K',
        level: 'Beginner',
        duration: '6 hours',
        image: Course4,
    },
];

const FeatureCourses = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
                Our Feature Courses
            </h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                    <div key={index} className="flex flex-col sm:flex-row bg-white shadow-lg overflow-hidden">
                        <img src={course.image} alt={course.title} className="sm:w-1/3 w-full h-40 sm:h-auto object-cover" />
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            {/* Category & Price */}
                            <div className="flex justify-between items-center">
                                <span className={`text-xs font-semibold px-2 py-1 rounded ${index % 2 === 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                                    {course.category}
                                </span>
                                <div>
                                    <span className="text-lg font-bold">${course.price.toFixed(2)}</span>
                                    <span className="text-gray-400 line-through ml-2">${course.originalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-md font-semibold mt-2">{course.title}</h3>

                            {/* Instructor & Rating */}
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-2">
                                    <img src={Instructor} alt={course.instructor} className="w-6 h-6 rounded-full" />
                                    <p className="text-sm text-gray-600">{course.instructor}</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <Star size={16} fill='orange' stroke='orange' />
                                    <span className="ml-1 font-semibold text-gray-800">
                                        {course.rating} <span className="text-gray-400">({course.reviews.toLocaleString()})</span>
                                    </span>
                                </div>
                            </div>

                            {/* Course Details */}
                            <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                                <span className="flex items-center gap-1 xl:gap-2">
                                    <User size={18} stroke="blue" />
                                    {course.students} students
                                </span>
                                <span className="flex items-center gap-1 xl:gap-2">
                                    <BarChart size={18} stroke="orange" />
                                    {course.level}
                                </span>
                                <span className="flex items-center gap-1 xl:gap-2">
                                    <Clock size={18} stroke="green" />
                                    {course.duration}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCourses;
