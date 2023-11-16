import React from 'react'
import Songify from '../assets/Songify.jpg'

var newProjects = () => {
    return(
        <div className='flex justify-center items-center'>
            <ul className='w-[60%]'>
                <li className='relative border-[#f72828] border-2 rounded-lg'>
                    <img src={Songify} alt='Kekw' className=''></img>
                    <div className='absolute top-[50%] left-[50%] w-[50%] p-4 translate-y-[-50%] bg-[#492b49]'>
                        <p className='text-white'>Songify uses CoHere API and Spotify API to add songs to the user's
                        your playlist using any prompt the user wants.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default newProjects;