import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assests/images/SR.jpg';

const Navbar = () => {
    return (
        <div className="container mx-auto px-10 py-1 bg-secondary bg-opacity-80 text-white ">
            <nav className="flex justify-between items-center  px-5">
                 
                <div className="flex space-x-4 px-5">
                    <ul className="flex space-x-4 ">
                        <li className=" hover:text-gray-800 transition duration-300 ease-in-out">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className=" hover:text-gray-800 transition duration-300 ease-in-out">
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className=" hover:text-gray-800 transition duration-300 ease-in-out">
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className=" hover:text-gray-800 transition duration-300 ease-in-out">
                            <Link to="/projects">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                <img src={logo} alt="logo" className="h-14  w-14 border-black border border-solid" />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
