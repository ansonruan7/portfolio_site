import React from 'react'
import Songify from '../assets/Songify.jpg'

var newProjects = () => {
    return(
        <div>
            <div className='flex items-center justify-center py-10 border-2 border-red-600'>
            <h1 className='text-white'>projects</h1>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='w-[60%] flex justify-center items-center'>
                    <li className='relative border-[#f72828] border-2 rounded-lg'>
                        <img src={Songify} alt='Kekw' className='scale-75 translate-x-[-12.5%]'></img>
                        <div className='absolute top-[50%] left-[50%] w-[50%] translate-y-[-50%] p-4
                        bg-[#492b49] drop-shadow-md
                        md:text-base sm:text-sm text-xs
                        '>
                            <p className='text-white bg-vil'>Songify uses CoHere API and Spotify API to add songs to the user's
                            your playlist using any prompt the user wants.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default newProjects;