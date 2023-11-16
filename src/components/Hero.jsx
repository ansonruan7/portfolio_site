import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return(
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#d8d8d8] font-bold p-1 text-xl'>hi, my name is</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-1 text-white'>Anson Ruan</h1>
                <div className='flex justify-center items-center'>
                    <p className='text-[#d8d8d8] md:text-5xl sm:text-4xl text-xl font-bold py-4'>i'm proficient in...</p>
                    <Typed strings={['javascript', 'react', 'tailwind', 'python', 'java', 'MySQL']} 
                        typeSpeed={120} 
                        backSpeed={140} loop 
                        className='text-[#5e91aa] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'/>
                </div>
                <p className='text-[#a3a3a3]'>i'm a full stack software engineer attending western univserity,
                pursuing a degree in software engineering. i'm passionate about creating enjoyable experiences
                for the users of my software and hope to pursue a career where i can leverage my creativity.
                </p>
                <p className='text-[#a3a3a3] pt-14'>when i'm not coding, you'll find me gaming, rock climbing, dancing or djing.</p>
                {/* May or may not want this button
                <button className='bg-[#5e91aa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>about me</button>
                */}
            </div>
        </div>
    )
}

export default Hero;