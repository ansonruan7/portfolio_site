import React, {useState} from 'react';
import {
    FaGithubSquare,
    FaInstagramSquare,
    FaFacebookSquare,
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
    const [gitHover, setGit] = useState(false); 
    const [fbHover, setFB] = useState(false);
    const [igHover, setIG] = useState(false);
    const [liHover, setLI] = useState(false);

    const handleGit = () => {
        setGit(!gitHover);
    }
    const handleFB = () => {
        setFB(!fbHover);
    }
    const handleIG = () => {
        setIG(!igHover);
    }
    const handleLI = () => {
        setLI(!liHover);
    } 

    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#5e91aa]'>anson.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, est nesciunt officiis assumenda sequi, earum ad quidem ipsam libero vitae expedita magni eos. Totam eius animi dolorem saepe fugiat consectetur?</p>
                <div className='flex justify-between md:w-[50%] my-6'>
                    <a href='https://github.com/ansonruan7?tab=repositories' onMouseEnter={handleGit} onMouseLeave={handleGit}>
                        {!gitHover ? <FaGithubSquare size={30}/> : <FaGithubSquare size={30} color={'grey'}/>}
                    </a>
                    <a href='https://www.facebook.com/anson.ruan.96/' onMouseEnter={handleFB} onMouseLeave={handleFB}>
                        {!fbHover ? <FaFacebookSquare size={30}/> : <FaFacebookSquare size={30} color={'grey'}/>}
                    </a>                                       
                    <a href='https://www.instagram.com/notansonruan/' onMouseEnter={handleIG} onMouseLeave={handleIG}>
                        {!igHover ? <FaInstagramSquare size={30}/> : <FaInstagramSquare size={30} color={'grey'}/>}
                    </a>                        
                    <a href='https://www.linkedin.com/in/anson-ruan-0b137520b/' onMouseEnter={handleLI} onMouseLeave={handleLI}>
                        {!liHover ? <FaLinkedin size={30}/> : <FaLinkedin size={30} color={'grey'}/>}
                    </a>                        
                </div>
            </div>
        </div>
    );
}

export default Footer;