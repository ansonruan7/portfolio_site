import React from 'react';
import {
    FaGithubSquare,
    FaInstagramSquare,
    FaFacebookSquare,
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#fdcfff]'>anson.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, est nesciunt officiis assumenda sequi, earum ad quidem ipsam libero vitae expedita magni eos. Totam eius animi dolorem saepe fugiat consectetur?</p>
                <div className='flex justify-between md:w-[50%] my-6'>
                    <FaGithubSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaLinkedin size={30}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;