import React, {useState} from 'react'
import Songify from '../assets/Songify.jpg'
import {FaGithubSquare,} from 'react-icons/fa';


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
                <ul className='w-[60%] flex justify-center items-center'>
                    <li className='relative rounded-lg hover:bg-[#351f35] px-6'>
                        <img src={Songify} alt='Kekw' className='sm:scale-75 lg:translate-x-[-12.5%] bg-[#251625]/[75%] lg:opacity-50 opacity-25'></img>
                        <div className='absolute top-[50%] lg:left-[50%] lg:w-[50%] translate-y-[-50%] p-4
                        lg:bg-[#492b49] bg-[#492b49]/50  drop-shadow-md hover:bg-[#583458]
                        sm:text-sm text-xs'>
                            <div className='absolute top-[-75%] right-[25%]'>
                                <p className='text-[#5e91aa] text-lg font-bold'>Songify</p>
                                <p className='text-[#d8d8d8] text-sm'>HackWestern9</p>
                            </div>
                            <p className='text-white bg-vil'>Songify uses CoHere API and Spotify API to add songs to the user's
                            your playlist using any prompt the user wants.</p>
                        </div>
                        <div className='absolute bottom-16 right-[20%]'>
                            {isHovered ? <FaGithubSquare size={30} color={'#5e91aa'}/> : <FaGithubSquare size={30} color={'#68a0bc'}/>}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NewProjects;