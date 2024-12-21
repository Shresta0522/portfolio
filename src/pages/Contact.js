import React from 'react'
import Navbar from '../components/Navbar'
import profilephoto from '../assests/images/SR.jpg'
const Contact = () => {
    return (
        <div>
             <Navbar />
            <div className='flex bg-white border-solid py-8'>
            <div className='flex-shrink-0 p-36 items-center justify-center bg-highlight bg-opacity-50'>
                <img src={profilephoto} alt="Shresta Rapol" className="h-96 w-96 object-cover absolute border-solid border border-secondary " />
            </div>
                <div className='flex px-8 gap-2 items-center w-full  justify-center'>
                    <div className='p-12 border border-gray-800 rounded-md '>
                    <h1 className='text-3xl font-semibold py-8 items-center justify-center text-secondary'>Contact Me</h1>
                        <form className='flex flex-col '>
                            <input type='text' placeholder='Name' className='p-2 m-2 w
                            -80 border border-gray-500 rounded-md' />
                            <input type='email' placeholder='Email' className='p-2 m-2 w-80 border border-gray-500 rounded-md' />
                            <textarea placeholder='Message' className='p-2 m-2 w-80 h-40 border border-gray-500 rounded-md'></textarea>
                            <button className='p-2 m-2 w-80 bg-accent text-white rounded-md'>Send</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
