import React from 'react'
import profilephoto from '../assests/images/profile-photo.jpeg'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className='flex  bg-white border-solid '>
            <div className='flex-shrink-0 '>
                <img src={profilephoto} alt="Shresta Rapol" className="h-fu;; w-full border-solid border  border-secondary  opacity-90" />
            </div>
            <div >
                <Navbar />
                <div className=' justify-center items-center py-4'>
                    <h1 className="text-4xl text-center py-4">Welcome to my Portfolio</h1>
                    <div className=" flex flex-col p-5 mx-5 justify-center border-solid border border-secondary  ">

                        <p className="text-xl">Hello, I am Shresta Rapol</p>
                        <p className="text-lg">I am a Full Stack Developer</p>
                        <p className="text-lg">I am a Full Stack Developer with experience in developing web applications using React, Node.js, Express.js, and MongoDB.
                            I am passionate about learning new technologies and building projects that solve real-world problems.
                            I am currently looking for opportunities to work on exciting projects and collaborate with other developers.
                        </p>
                        <div>
                            Skills to be added
                        </div>
                        <button className='p-2 w-1/5 bg-accent  text-white border-2 border-solid border-accent'>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
