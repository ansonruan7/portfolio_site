import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return(
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#fdcfff] font-bold p-1'>my little collection</p>
                {/*
                not sure if i wanna keep this
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Placeholder</h1>
                */}
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>i'm proficient in...</p>
                    <Typed strings={['javascript', 'react', 'tailwind', 'python', 'java', ]} 
                        typeSpeed={120} 
                        backSpeed={140} loop 
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'/>
                </div>
                <button className='bg-[#5e91aa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>about me</button>
            </div>
        </div>
    )
}

export default Hero;