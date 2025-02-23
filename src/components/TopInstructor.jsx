import React from 'react';
import Instructor1 from '../assets/Instructor1.png';
import Instructor2 from '../assets/Instructor2.png';
import Instructor3 from '../assets/Instructor3.png';
import Instructor4 from '../assets/Instructor4.png';
import Instructor5 from '../assets/Instructor5.png';
import { MoveRight, Star } from 'lucide-react';

const instructors = [
    { name: "Devon Lane", role: "Senior Developer", rating: 4.6, students: 854, image: Instructor1 },
    { name: "Darrell Steward", role: "Digital Product Designer", rating: 4.9, students: 451444, image: Instructor2 },
    { name: "Jane Cooper", role: "UI/UX Designer", rating: 4.8, students: 435123, image: Instructor3 },
    { name: "Albert Flores", role: "Adobe Instructor", rating: 4.7, students: 511123, image: Instructor4 },
    { name: "Kathryn Murphy", role: "Lead Developer", rating: 4.2, students: 2711, image: Instructor5 },
];

const TopInstructor = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">Top Instructor of the Month</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {instructors.map((instructor, index) => (
                    <div key={index} className="bg-white shadow-md overflow-hidden">
                        <img className="w-full h-56 object-cover" src={instructor.image} alt={instructor.name} />
                        <div className="h-32 flex flex-col items-center justify-between">
                            <div className="text-center mt-4">
                                <h3 className="text-lg font-semibold">{instructor.name}</h3>
                                <p className="text-sm text-gray-500">{instructor.role}</p>
                            </div>
                            <div className="flex items-center justify-between w-full border-t border-gray-200 p-3">
                                <div className="flex items-center">
                                    <Star size={16} stroke="orange" fill="orange" className="text-yellow-500" />
                                    <p className="ml-1 text-sm">{instructor.rating}</p>
                                </div>
                                <p className="text-sm text-gray-600 font-semibold">
                                    {instructor.students.toLocaleString()} <span className="text-gray-400">students</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-3">
                <span className="text-sm text-center sm:text-left">Thousands of students waiting for an instructor. Start teaching & earning now!</span>
                <a href="#" className="text-orange-500 font-semibold flex gap-2 items-center text-sm">
                    Become Instructor <MoveRight size={20} className='mt-1' />
                </a>
            </div>
        </div>
    );
}

export default TopInstructor;
