import React from 'react';


const Navbar = function(){ 
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#5e91aa]'>anson.</h1>
            <a href='mailto:ansonruan4@gmail.com'>
                <button className='bg-[#5e91aa] hover:bg-[#75b4d3] sm:w-[150px] w-[100px] rounded-md font-small my-6 mx-auto py-3 text-white'>email me</button>
            </a>
        </div>
    );
}

export default Navbar;