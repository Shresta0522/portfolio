import React from 'react'
import Navbar from '../components/Navbar'

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className='flex bg-white border-solid justify-center'>
                

                <div className='  items-center justify-center w-full'>
                    <div className='flex flex-col items-center justify-center p-2'>
                        <ul className='flex  gap-4'>
                            <li className='text-2xl font-bold hover:border-b-2'>All Projects</li>
                            <li className='text-2xl font-bold hover:border-b-2'>Java</li>
                            <li className='text-2xl font-bold  hover:border-b-2'>Python</li>
                            <li className='text-2xl font-bold  hover:border-b-2'>React</li>
                            <li className='text-2xl font-bold  hover:border-b-2'>Node</li>
                        </ul>
                    </div>
                    <div className='flex flex-wrap justify-center gap-8 px-0 max-w-6xl mx-auto py-3 rounded-lg bg-accent bg-opacity-80'>
                        <div className='bg-white p-6 rounded-lg shadow-lg  h-80 w-80'>
                            <h2 className='text-2xl font-bold mb-2'>Project 1</h2>
                            <p className='text-gray-700'>Description of project 1.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg  h-80 w-80'>
                            <h2 className='text-2xl font-bold mb-2'>Project 2</h2>
                            <p className='text-gray-700'>Description of project 2.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg h-80 w-80'>
                            <h2 className='text-2xl font-bold mb-2'>Project 3</h2>
                            <p className='text-gray-700'>Description of project 3.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg h-80 w-80'>
                            <h2 className='text-2xl font-bold mb-2'>Project 4</h2>
                            <p className='text-gray-700'>Description of project 4.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg h-80 w-80'>
                            <h2 className='text-2xl font-bold mb-2'>Project 5</h2>
                            <p className='text-gray-700'>Description of project 5.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-lg h-80 w-80'>
                            <h2 className='text-2xl font-bold mb-2'>Project 6</h2>
                            <p className='text-gray-700'>Description of project 6.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
