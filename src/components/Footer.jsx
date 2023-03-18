import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto '>
        <div className='max-h-[280px] relative'>
            <div className='absolute w-full h-full text-[#F2F2F2] max-h-[280px] bg-black/50'>
                <div className='flex flex-row flex-nowrap gap-32'>
                    <div className='flex flex-col'>
                        <div className='px-20 py-6'>
                            <h1 className='font-italiana text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl'>FAMIGLIA.</h1> 
                            <h2 className='font-worksans text-white text-sm font-thin py-3'>254 West 54th Street<br />NY 10019 USA</h2>
                            <h2 className='font-worksans text-white text-sm font-thin py-1'>+1 212-719-1300</h2>
                            <h2 className='font-worksans text-white text-sm font-thin -py-1 tracking-widest'>Famiglia@gmail.com</h2>
                        </div> 
                        <div className='flex row py-2 px-20 gap-1'>
                            <button className='-ml-6'><img src="./social/social_b-01.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-02.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-04.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-05.svg" alt="/" width={33}/></button>
                            <button className='-ml-8'><img src="./social/social_b-06.svg" alt="/" width={33}/></button>
                        </div>  
                    </div>
                    {/* <div className='flex py-10'>    
                        <h1>USEFUL LINKS</h1>
                       
                    </div>
                    <div className='flex py-10'>    
                        <h1>USEFUL LINKS</h1>
                        
                    </div>
                    <div className='flex py-10'>    
                        <h1 className='flex-start'>USEFUL LINKS</h1>
                       
                    </div> */}
                
                
                    
                </div>         
            </div>    
            <img className='object-cover h-[280px] w-full' src="./food/jodie-morgan-v25z8P-CPB4-unsplash.jpg" alt="vegetables"/>
        </div>
    </div>
  )
}

export default Footer