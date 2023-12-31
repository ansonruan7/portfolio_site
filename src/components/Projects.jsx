import React from 'react'
import Songify from '../assets/Songify.jpg';
import Background from '../assets/Background.png';

const About = () => {
    return(
        <div className="w-full pb-16 px-4">
            <h1 className='font-medium text-3xl text-center py-10'>projects</h1>
            {/*Project display design - RIGHT SIDE*/}
            <div id='container' className='flex justify-end'>
                <div className='grid grid-cols-3 grid-flow-col w-[85%]'>
                    <div id='column1' className='items-center flex m-1'>
                        <img src={Songify} alt="/" className='w-[500px] mx-auto my-4 flex rounded-lg'/>
                    </div>
                    {/*Ball and line component*/}
                    <div id='column2' className='items-center col-span-2 md:w-[75%] sm:w-[85%] w-[100%]'>
                        <h1 className='md:text-2xl sm:text-xl text-lg font-bold py-2 flex justify-end pr-4'>Songify: HackWestern9</h1>
                        <p className='flex justify-end pr-4 md:text-medium sm:text-base text-xs'>Stack: Python, Flask, Javascript, HTML, CSS</p>
                        <div className='flex justify-end items-center'>
                            <hr className='bg-black h-[3px] w-[100%] border-black'></hr>
                            {/*Circle*/}
                            <div className='w-3 h-3 bg-[#d692e4] rounded-full border-[1px] border-black'></div>
                        </div>
                        <div className='flex justify-end pr-4'>
                            <button className='bg-[#00df9a] 
                            md:w-[200px] sm:w-[150px] w-[100px]
                            md:text-lg sm:text-base text-sm 
                            my-2 py-2 text-black rounded-md font-medium'>Learn More</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;