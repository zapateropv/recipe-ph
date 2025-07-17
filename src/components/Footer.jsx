import React from 'react'
import recipeLogo from '../assets/recipe-logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='lg:flex lg:flex-row lg:justify-evenly lg:items-start bg-gray-100 p-10
        sm:flex sm:flex-col sm:justify-center sm:items-center '>
            <div className='flex flex-col justify-center items-start'>
                <img src={recipeLogo} className='lg:w-50 sm:w-40  mb-3' />
                <span className='mb-5 text-lg font-jetbrains'>Follow us</span>
                <div className='flex justify-start items-center gap-10 text-2xl'>
                    <FaFacebook className='cursor-pointer hover:text-blue-500' />
                    <FaInstagram className='cursor-pointer  hover:text-pink-500' />
                    <FaPinterest className='cursor-pointer  hover:text-red-500' />
                    <FaTiktok className='cursor-pointer  hover:text-blue-500' />
                    <FaYoutube className='cursor-pointer hover:text-red-500' />
                </div>
            </div>
            <div>
                <ul className="font-cuprum gap-3 lg:flex lg:flex-col lg:items-start lg:justify-center lg:text-lg md:text-md sm:grid sm:grid-cols-3 sm:mt-10 sm:mb-10">
                    <li className="cursor-pointer hover:text-red-600">DINNERS</li>
                    <li className="cursor-pointer hover:text-red-600">MEALS</li>
                    <li className="cursor-pointer hover:text-red-600">INGREDIENTS</li>
                    <li className="cursor-pointer hover:text-red-600">OCCASIONS</li>
                    <li className="cursor-pointer hover:text-red-600">CUISINES</li>
                    <li className="cursor-pointer hover:text-red-600">KITCHEN TIPS</li>
                    <li className="cursor-pointer hover:text-red-600">NEWS</li>
                </ul>
            </div>
            <div className='flex justify-between items-center gap-15'>
                <ul className='flex flex-col items-start justify-between lg:text-lg gap-2 font-cuprum
                md:text-md'>
                    <li className='links'>About us</li>
                    <li className='links'>Privacy Policy</li>
                    <li className='links'>Terms of Service</li>
                    <li className='links'>Careers</li>
                </ul>
                <ul className='flex flex-col items-start justify-between gap-2 lg:text-lg font-cuprum
                  md:text-md'>
                    <li className='links'>Editorial Process</li>
                    <li className='links'>Product Vetting</li>
                    <li className='links'>Advertise</li>
                    <li className='links'>Contact</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer
