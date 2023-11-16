import React from 'react'
import Songify from '../assets/Songify.jpg'

var newProjects = () => {
    return(
        <div className='flex justify-center items-center'>
            <ul className='w-[60%]'>
                <li className='border-[#f72828] border-2 rounded-lg'>
                    <img src={Songify} alt='Kekw' className=''></img>
                </li>
            </ul>
        </div>
    )
}
export default newProjects;