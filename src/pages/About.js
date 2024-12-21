import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div className='bg-white border-solid '>
            <Navbar />
            <div className='flex-grow bg-white border-solid p-8 mx-4 text-primary'>
                <div className='flex flex-col lg:flex-row justify-around'>
                    <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                        <h2 className='text-3xl font-bold mb-4'>Work Experience</h2>
                        <div className='relative border-l border-accent'>
                            <div className='mb-8 pl-4'>
                                <div className='absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-white'></div>
                                <p className='text-lg font-semibold'>Company A</p>
                                <p className='text-sm '>Jan 2020 - Present</p>
                                <p className=''>Role: Senior Developer</p>
                                <p className=''>Description of responsibilities and achievements.</p>
                            </div>
                            <div className='mb-8 pl-4'>
                                <div className='absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-white'></div>
                                <p className='text-lg font-semibold'>Company B</p>
                                <p className='text-sm '>Jan 2018 - Dec 2019</p>
                                <p className=''>Role: Developer</p>
                                <p className=''>Description of responsibilities and achievements.</p>
                            </div>
                            <div className='mb-8 pl-4'>
                                <div className='absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-white'></div>
                                <p className='text-lg font-semibold'>Company B</p>
                                <p className='text-sm '>Jan 2018 - Dec 2019</p>
                                <p className=''>Role: Developer</p>
                                <p className=''>Description of responsibilities and achievements.</p>
                            </div>
                            {/* Add more work experiences as needed */}
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-3xl font-bold mb-4'>Education</h2>
                        <div className='flex flex-col gap-4'>
                            <div className='bg-white p-6 rounded-lg shadow-lg'>
                                <h3 className='text-2xl font-bold mb-2'>University A</h3>
                                <p className=''>Degree: Bachelor of Science in Computer Science</p>
                                <p className=''>Year: 2014 - 2018</p>
                            </div>
                            <div className='bg-white p-6 rounded-lg shadow-lg'>
                                <h3 className='text-2xl font-bold mb-2'>University B</h3>
                                <p className=''>Degree: Master of Science in Software Engineering</p>
                                <p className=''>Year: 2018 - 2020</p>
                            </div>
                            <div className='bg-white p-6 rounded-lg shadow-lg'>
                                <h3 className='text-2xl font-bold mb-2'>University B</h3>
                                <p className=''>Degree: Master of Science in Software Engineering</p>
                                <p className=''>Year: 2018 - 2020</p>
                            </div>
                            {/* Add more education cards as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About