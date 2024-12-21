import React from 'react'
import profilephoto from '../assests/images/profile-photo.jpeg'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className='flex  h-screen  bg-white border-solid '>
            <div className='flex-shrink-0'>
                <img src={profilephoto} alt="Shresta Rapol" className="h-full w-full object-cover border-solid border border-secondary " />
            </div>
            <div >
                <Navbar />
                <div className=' justify-center items-center'>
                    <h1 className="text-4xl text-center py-4">Welcome to my Portfolio</h1>
                    <div className=" flex flex-col p-5 mx-5 justify-center border-solid border border-secondary  ">

                        <p className="text-xl">Hello, I am Shresta Rapol</p>
                        <p className="text-lg">I am a Full Stack Developer</p>
                        <p className="text-lg">I am a Full Stack Developer with experience in developing web applications using React, Node.js, Express.js, and MongoDB.
                            I am passionate about learning new technologies and building projects that solve real-world problems.
                            I am currently looking for opportunities to work on exciting projects and collaborate with other developers.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
