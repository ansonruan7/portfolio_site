import { React, useRef } from 'react';
import { InView } from 'react-intersection-observer';

import WCSIBM from '../assets/WCSIBM.png';
import SuperheroDB from '../assets/superheroDB.png';
import CHEER from '../assets/CHEER.png';

import {FaGithubSquare, FaFolderOpen, FaReact, FaPython, FaJava, FaAws} from 'react-icons/fa';
import { SiTailwindcss, SiIbm, SiMongodb } from "react-icons/si";
import { IoLogoNodejs, IoLogoFirebase } from "react-icons/io5";
import { TbBrandSocketIo } from "react-icons/tb";

import '../index.css';

const testProjects = () => {

    const feature = [
        {
            "title": "Student Zenter",
            "date": "February 2024 - March 2024",
            "description": "An improvement in speed, capacity, clarity and features from UWO student center using IBM Z Mainframe.",
            "image": WCSIBM,
            "github": "https://github.com/ansonruan7/WCSIBM",
            "elements": <div className='py-1 flex justify-between'>
                <FaReact size={25}/> 
                <SiTailwindcss size={25}/>
                <IoLogoNodejs size={25}/>
                <FaPython size={25}/>
                <FaJava size={25}/>
                <SiIbm size={25}/>
            </div>,
        },
        {
            "title": "SuperheroDB",
            "date": "September 2023 - December 2023",
            "description": "A superhero database, implementing authentication, soft searches, and user-associated lists. Previously deployed on AWS Server.",
            "image": SuperheroDB,
            "github": "https://github.com/ansonruan7/SuperheroDB",
            "elements": <div className='py-1 flex justify-between'>
                <FaReact size={25}/> 
                <SiTailwindcss size={25}/>
                <IoLogoNodejs size={25}/>
                <FaAws size={25}/>
                <IoLogoFirebase size={25}/>
            </div>,
        },
        {
            "title": "CHEER Website",
            "date": "September 2023 - April 2024",
            "description": "A website for CHEER Group, focusing on accessibility for special-needs individuals. Features text-to-speech, accessibility login, and a frontend that is easy to navigate.",
            "image": CHEER,
            "github": "https://github.com/ansonruan7/CHEER.git",
            "elements": <div className='py-1 flex justify-between'>
                <FaReact size={25}/> 
                <SiTailwindcss size={25}/>
                <IoLogoNodejs size={25}/>
                <SiMongodb size={25}/>
                <TbBrandSocketIo size={25}/>
            </div>,
        }
    ];
    const misc = [
        {
            "title": "Kademlia P2P Network",
            "github": ""
        },
        {
            "title": "BaadDays",
            "github": ""
        }
    ];

    return(
        <div className="flex items-center justify-center my-4">
            <div className='px-4 w-[65%]'>
                {feature.map((feature, index) => {
                    return(
                        <InView>
                            {({inView, ref, entry}) => (
                                <div key={index} ref={ref} className={inView ? 
                                    "grid grid-cols-2 p-4 rounded-xl bg-transparent hover:bg-[#31192c] transition-all opacity-100 duration-1000" : 
                                    "grid grid-cols-2 p-4 rounded-xl bg-transparent opacity-0 translate-x-[-100%] hover:bg-[#31192c]"}>
                                    <div className='items-center flex m-1'>
                                        <img src={feature.image} alt="/" className='mx-auto my-4 flex rounded-lg brightness-[75%]'/>
                                    </div>
                                    <div className='text-white my-6 mx-4 items-center grid'>
                                        <h1 className='py-1 font-extrabold text-2xl'>{feature.title}</h1>
                                        <h2 className='py-1 font-semibold text-md'>{feature.date}</h2>
                                        <p className='py-1'>{feature.description}</p>
                                        {feature.elements}
                                        <div className='flex'>
                                            <p className='mr-4'>Learn More: </p><a href={feature.github} id='github_logo' className=''>{<FaGithubSquare size={30} color="white"/>}</a>
                                        </div>
                                    </div>
                                </div>
                            )}                            
                        </InView>
                    );
                })}
                <div className="my-10">
                    <div className='px-4 w-[65%] grid grid-cols-4'>
                        {misc.map((feature, index) => {
                            return(
                                <div key={index} className='bg-[#31192c] border-2 border-white border-opacity-25 p-6 rounded-xl flex justify-center items-center m-auto'>
                                    <div className="flex flex-col items-center text-center"> {/* Container with flex-direction: column */}
                                        <FaFolderOpen size={60} color="white" />
                                        <p className='text-white font-semibold text-lg'>{feature.title}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default testProjects;