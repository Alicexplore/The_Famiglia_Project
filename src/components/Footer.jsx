import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto '>
        <div className='h-[1px] bg-[#6f6f6f]'></div>
        <div className='h-[210px] bg-[#151515] relative'>
            <div className='absolute w-full text-[#F2F2F2] h-[210px] bg-[#151515]'>
                <div className='flex flex-row flex-nowrap gap-40'>
                    <div className='flex flex-col'>
                        <div className='px-20 py-6'>
                            <h1 className='font-italiana text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl'>FAMIGLIA.</h1> 
                            <h2 className='font-worksans text-white text-sm font-thin py-3'>254 West 54th Street<br />NY 10019 USA</h2>
                            <h2 className='font-worksans text-white text-sm font-thin py-1'>+1 212-719-1300</h2>
                            <h2 className='font-worksans text-white text-sm font-thin -py-1 tracking-widest'>Famiglia@gmail.com</h2>
                        </div> 
                    </div>
                    <div className='flex py-10 px-4 font-work-sans font-base'>    
                        <h1>USEFUL LINKS</h1>
                       
                    </div>
                    <div className='flex py-10 px-4'>    
                        <h1>USEFUL LINKS</h1>
                        
                    </div>
                    <div className='flex py-10 px-4'>    
                            <button className='-ml-6'><img src="./social/social_b-01.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-02.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-04.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-05.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-06.svg" alt="/" width={33}/></button>  
                    </div>
                
                
                    
                </div>         
            </div>    
        </div>
        <div className='h-[1px] bg-[#6f6f6f]'></div>
    </div>
  )
}

export default Footer