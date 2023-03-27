import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='mx-auto -mt-20 scroll-smooth'>
            <div className='max-h-[800px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full text-[#F2F2F2] max-h-[800px] 
                 bg-black/30 flex flex-col items-center justify-center place-items-center'>
                    <h1 className='px-4 mb-6 text-1xl sm:text-1xl md:text-2xl lg:text-3xl font-worksans tracking-widest mt-20'>DINNER AT</h1>
                    <h1 className='px-4 text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-italiana tracking-widest'>FAMIGLIA.</h1>
                    <h1 className='px-4 mb-18 mt-1 text-sm sm:text-sm md:text-base lg:text-xl font-worksans font-light tracking-widest'>WE MAKE VEGAN FOOD NOT WAR</h1>
                        <div className='grid grid-cols-2 place-items-center my-16 gap-8'>
                            <Link to="/About"><button className='font-worksans p-2 pl-5 pr-5 bg-transparent border-2 border-[#F2F2F2] text-[#F2F2F2] text-base rounded-sm transition-colors duration-700 transform hover:bg-transparent hover:text-[#58731a] hover:border-[#58731a]'>ABOUT US</button></Link>
                            <Link to="/Food"><button className='font-worksans p-2 pl-5 pr-5 bg-[#F2F2F2] border-2 border-[#F2F2F2] text-[#151515] text-base rounded-sm transition-colors duration-700 transform hover:bg-[#58731a] hover:text-gray-100 hover:border-[#58731a]'>TASTE US</button></Link>
                        </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-16 w-16 animate-bounce text-white -mb-96 mt-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" /></svg> */}
                </div>
                <img className='w-full max-h-[800px] object-cover' src="./food/jodie-morgan-v25z8P-CPB4-unsplash.jpg" alt="vegetables" />
            </div>
        </div>
    )
}

export default Hero

