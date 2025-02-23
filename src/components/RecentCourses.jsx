import React from "react";
import { Star, MoveRight, Check, User, Clock, BarChart, Heart, ShoppingCart } from "lucide-react";
import CourseImages1 from "../assets/CourseImages1.png";
import CourseImages2 from "../assets/CourseImages2.png";
import CourseImages3 from "../assets/CourseImages3.png";
import CourseImages4 from "../assets/CourseImages4.png";
import Instructor from '../assets/Instructor.png'

const courses = [
    {
        category: "DESIGN",
        title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
        price: "$57",
        rating: 5.0,
        students: "265.7K",
        image: CourseImages1,
        background: "bg-red-100",
        color: "text-amber-800",
    },
    {
        category: "DEVELOPMENT",
        title: "The Complete 2021 Web Development Bootcamp",
        price: "$57",
        rating: 5.0,
        students: "265.7K",
        image: CourseImages2,
        background: "bg-purple-100",
        color: "text-purple-500",
    },
    {
        category: "BUSINESS",
        title: "Learn Python Programming Masterclass",
        price: "$57",
        rating: 5.0,
        students: "265.7K",
        image: CourseImages3,
        background: "bg-green-100",
        color: "text-green-500",
    },
    {
        category: "MARKETING",
        title: "The Complete Digital Marketing Course - 12 Courses in 1",
        price: "$57",
        rating: 5.0,
        students: "265.7K",
        image: CourseImages4,
        background: "bg-purple-100",
        color: "text-purple-500",
    },
];

const bigCardData = {
    category: "DEVELOPMENTS",
    title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    instructor: "Kevin Gilbert",
    rating: "5.0",
    reviews: "357,914",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hours",
    discountedPrice: "14.00",
    originalPrice: "26.00",
    discount: "56",
    whatYouLearn: [
        "Learn to use Python professionally, learning both Python 2 and Python 3!",
        "Create games with Python, like Tic Tac Toe and Blackjack!",
        "Create games with Python, like Tic Tac Toe and Blackjack!"
    ],
    background: "bg-purple-100",
    color: "text-purple-500"
}

const RecentCourses = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:px-0 relative">
            {/* Section Title */}
            <div className="text-center mb-10">
                <p className="text-3xl md:text-4xl font-semibold">Recently Added Courses</p>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg overflow-hidden"
                    >
                        {/* Course Image */}
                        <div className="w-full h-44 md:h-40 lg:h-48 bg-gray-200 flex items-center justify-center">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Course Details */}
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between py-1 px-2">
                                <span
                                    className={`text-xs font-semibold ${course.background} ${course.color} px-2 py-1 rounded`}
                                >
                                    {course.category}
                                </span>
                                <p className="text-lg font-bold text-[#FF6636]">{course.price}</p>
                            </div>

                            {/* Course Title */}
                            <h3 className="text-base font-semibold mt-2 line-clamp-2 px-2">
                                {course.title}
                            </h3>

                            {/* Rating & Students */}
                            <div className="flex items-center justify-between text-sm text-gray-700 mt-3 border-t border-gray-200 py-2 px-2">
                                <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500" fill="orange" stroke="orange" />
                                    {course.rating}
                                </span>
                                <span className="font-semibold">
                                    {course.students} <span className="text-gray-400">students</span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Browse All Button */}
            <div className="text-center mt-16 flex justify-center items-center gap-3">
                <a href="#" className="text-orange-600 bg-orange-100 px-6 py-2 font-semibold flex items-center gap-2 text-sm">Browse all Course <MoveRight size={20} className="mt-1" /></a>
            </div>


            {/* Big Card */}
            <div className="hidden xl:block">
                <div className="w-full md:w-96 shadow-2xl rounded-md p-5 bg-white absolute top-0 right-0 flex flex-col gap-2">
                    <p className={`text-xs font-semibold ${bigCardData.background} ${bigCardData.color} p-1 inline-block w-28 text-center`}>{bigCardData.category}</p>
                    <h2 className="text-lg font-semibold mt-2">{bigCardData.title}</h2>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={Instructor} alt="" className='w-14' />
                            <p className="text-sm text-gray-500 flex flex-col">Course by <span className="font-semibold">{bigCardData.instructor}</span></p>
                        </div>
                        <div className="flex items-center mt-2">
                            <Star className="w-4 h-4 text-orange-700" fill='orange' stroke='orange' />
                            <span className="text-sm font-medium ml-1">{bigCardData.rating} <span className='text-gray-500'>({bigCardData.reviews})</span></span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                        <span className="flex items-center justify-center gap-2"><User size={20} stroke='blue' /> {bigCardData.students} students</span>
                        <span className="flex items-center justify-center gap-2"><BarChart size={20} stroke='orange' />{bigCardData.level}</span>
                        <span className="flex items-center justify-center gap-2"><Clock size={20} stroke='green' />{bigCardData.duration}</span>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <p className="text-2xl font-semibold flex items-center gap-2">${bigCardData.discountedPrice} <span className="text-base text-gray-400 line-through">${bigCardData.originalPrice}</span> <span className="text-sm text-orange-500 py-1 px-3 bg-orange-100">{bigCardData.discount}% OFF</span></p>
                        <div className=' bg-red-100 p-3 cursor-pointer'>
                            <Heart size={25} stroke='orange' />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-xs font-semibold uppercase">What you'll learn</p>
                        <div className="text-sm text-gray-500 mt-1 space-y-2">
                            {bigCardData.whatYouLearn.map((item, index) => (
                                <div key={index} className="flex items-start gap-x-2">
                                    <Check size={20} color="green" stroke="green" className="flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                        <button className="bg-orange-500 text-white py-2 px-4 flex justify-center items-center gap-3 cursor-pointer"> <ShoppingCart size={22} /> Add To Cart</button>
                        <button className="py-2 px-4  text-orange-500 bg-red-100 font-semibold cursor-pointer">Course Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentCourses;
