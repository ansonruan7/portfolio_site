import React from 'react'
import Songify from '../assets/Songify.jpg';

const About = () => {
    return(
        <div className='w-full bg-white py-16 px-4'>
            {/*Project display design - RIGHT SIDE*/}
            <div id='container' className='flex justify-end'>
                <div className='grid grid-cols-2 grid-flow-col w-[75%]'>
                    <div id='column1' className='items-center flex m-1'>
                        <img src={Songify} alt="/" className='w-[500px] mx-auto my-4 flex rounded-lg'/>
                    </div>
                    {/*Ball and line component*/}
                    <div className='flex items-center'>
                        <div id='column2'>
                            <div className='flex justify-end'>
                                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Songify: HackWestern9</h1>
                            </div> 
                            <div className='flex justify-end'>
                                <hr className='bg-black h-1 w-[100%] my-1'></hr>
                                {/*Circle*/}
                                <div className='w-3 h-3 bg-white rounded-full border-2 border-black'></div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-[#00df9a] w-[200px] md: rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Learn More</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            {/*Project display design - LEFT SIDE*/}
            <div id='container' className='my-6'>
                <div className='grid grid-cols-2 grid-flow-col w-[75%]'>
                    {/*Ball and line component*/}
                    <div className='flex items-center'>
                        <div id='column2'>
                            <div className='flex justify-end'>
                                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Songify: HackWestern9</h1>
                            </div> 
                            <div className='flex justify-end'>
                                {/*Circle*/}
                                <div className='w-3 h-3 bg-white rounded-full border-2 border-black'></div>
                                <hr className='bg-black h-1 w-[100%]'></hr>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Learn More</button>
                            </div> 
                        </div>
                    </div>
                    <div id='column1' className='items-center flex m-1'>
                        <img src={Songify} alt="/" className='w-[500px] mx-auto my-4 flex rounded-lg'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;