import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            <h1>This is courses {courses.length}</h1>
            <div className='all-things'>

                <div className='cards'>
                    {
                        courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
                    }
                </div>
                <div className='links'>
                    {
                        courses.map(course => <Link className='link' to={`/courses/${course.id}`} > {course.name}</Link>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Courses;