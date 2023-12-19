import React, {useState} from 'react';
import Songify from '../assets/Songify.jpg';
import BaadDays from '../assets/BaadDays.jpg';
import superheroDB from '../assets/superheroDB.png';
import {FaGithubSquare} from 'react-icons/fa';


var NewProjects = () => {
    const [isHovered, setHover] = useState(false);

    const handleHover = () => {
        setHover(!isHovered);
    }

    return(
        <div>
            <div className='flex items-center justify-center py-10'>
                <h1 className='text-white text-3xl'>projects</h1>
                <hr className='border-white w-[10%] mx-2'></hr>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='w-[60%] justify-center items-center'>
                    {/*Right Side*/}
                    <li className='relative rounded-lg px-6 md:my-6 my-12'>
                        <img src={superheroDB} alt='Kekw' className='sm:scale-75 lg:translate-x-[-12.5%] bg-[#251625]/[75%] lg:opacity-50 opacity-25'></img>
                        <div className='lg:absolute top-[50%] lg:left-[50%] lg:w-[50%] translate-y-[-50%] p-4 
                        lg:bg-[#492b49] bg-[#492b49]/50  drop-shadow-md hover:bg-[#583458]
                        sm:text-sm text-xs
                        flex justify-center items-center'>
                            <div className='absolute sm:top-[-75%] lg:right-[10%] top-[-60%]'>
                                <p className='text-[#5e91aa] text-lg font-bold'>SuperheroDB</p>
                                <p className='text-[#d8d8d8] text-sm'>Western University</p>
                            </div>
                            <p className='text-white bg-vil'>SuperheroDB uses React.js, Node.js, Express, Firebase Auth, and Firestore to deliver
                            superhero information to the user. Different authorization levels were given to admin, site managers, and users, with
                            several functionalities such as creating lists, leaving reviews, and other user management.</p>
                        </div>
                        <div className='absolute lg:bottom-16 lg:right-[20%] sm:bottom-0 bottom-2' onMouseEnter={handleHover} onMouseLeave={handleHover}>
                            <a href='https://github.com/aruan4/se3316-aruan4-lab4'>
                                {!isHovered ? <FaGithubSquare size={30} color={'#5e91aa'}/> : <FaGithubSquare size={30} color={'#6ca5c2'}/>}
                            </a>
                        </div>
                    </li>
                    {/*Left Side*/}
                    <li className='relative rounded-lg px-6 md:my-6 my-12'>
                        <img src={BaadDays} alt='Kekw' className='sm:scale-75 2xl:translate-x-[40%] lg:translate-x-[12.5%] bg-[#251625]/[75%] lg:opacity-50 opacity-25'></img>
                        <div className='lg:absolute top-[50%] lg:right-[50%] lg:w-[50%] translate-y-[-50%] p-4 
                        lg:bg-[#492b49] bg-[#492b49]/50  drop-shadow-md hover:bg-[#583458]
                        sm:text-sm text-xs
                        flex justify-center items-center'>
                            <div className='absolute sm:top-[-75%] lg:left-[25%] top-[-60%]'>
                                <p className='text-[#5e91aa] text-lg font-bold'>Baad Days</p>
                                <p className='text-[#d8d8d8] text-sm'>MapleHacks</p>
                            </div>
                            <p className='text-white bg-vil'>Baad Days is a web-app created using HTML, CSS and Javascript to inform
                            its users on strategies to deal with mental health</p>
                        </div>
                        <div className='absolute lg:bottom-16 lg:left-[20%] sm:bottom-0 bottom-2' onMouseEnter={handleHover} onMouseLeave={handleHover}>
                            <a href='https://github.com/aruan4/Baad-Day'>
                                {!isHovered ? <FaGithubSquare size={30} color={'#5e91aa'}/> : <FaGithubSquare size={30} color={'#6ca5c2'}/>}
                            </a>
                        </div>
                    </li>
                    {/*Right Side*/}
                    <li className='relative rounded-lg px-6 md:my-6 my-12'>
                        <img src={Songify} alt='Kekw' className='sm:scale-75 lg:translate-x-[-12.5%] bg-[#251625]/[75%] lg:opacity-50 opacity-25'></img>
                        <div className='lg:absolute top-[50%] lg:left-[50%] lg:w-[50%] translate-y-[-50%] p-4 
                        lg:bg-[#492b49] bg-[#492b49]/50  drop-shadow-md hover:bg-[#583458]
                        sm:text-sm text-xs
                        flex justify-center items-center'>
                            <div className='absolute sm:top-[-75%] lg:right-[10%] top-[-60%]'>
                                <p className='text-[#5e91aa] text-lg font-bold'>Songify</p>
                                <p className='text-[#d8d8d8] text-sm'>HackWestern9 - Top 10</p>
                            </div>
                            <p className='text-white bg-vil'>Songify uses CoHere API and Spotify API to add songs to the user's
                            your playlist using any prompt the user wants.</p>
                        </div>
                        <div className='absolute lg:bottom-16 lg:right-[20%] sm:bottom-0 bottom-2' onMouseEnter={handleHover} onMouseLeave={handleHover}>
                            <a href='https://github.com/ansonruan7/hackWesternPlaylist'>
                                {!isHovered ? <FaGithubSquare size={30} color={'#5e91aa'}/> : <FaGithubSquare size={30} color={'#6ca5c2'}/>}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NewProjects;