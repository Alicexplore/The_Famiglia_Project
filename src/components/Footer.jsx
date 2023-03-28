import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full text-[#F2F2F2] h-[210px] bg-[#000000] py-6 px-10'>
            <div className='grid grid-cols-5'>
                <div className='lg:grid lg:grid-rows-4 lg:-space-y-5 '>
                    <h1 className='font-italiana text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl'>FAMIGLIA.</h1> 
                    <h2 className='font-worksans text-white text-sm font-thin py-3'>254 West 54th Street<br />NY 10019 USA</h2>
                    <h2 className='font-worksans text-white text-sm font-thin py-1'>+1 212-719-1300</h2>
                    <h2 className='font-worksans text-white text-sm font-thin -py-1 tracking-widest'>Famiglia@gmail.com</h2>
                </div> 
                <div className='invisible sm:invisible md:invisible lg:visible lg:grid lg:grid-rows-6'>    
                    <h1>USEFUL LINKS</h1>
                        <h6 className='text-sm font-thin'>Going Home</h6>
                        <h6 className='text-sm font-thin'>All about us</h6>
                        <h6 className='text-sm font-thin'>Terms of services</h6>
                        <h6 className='text-sm font-thin'>Privacy policy</h6>
                </div>
                <div className='invisible sm:invisible md:invisible lg:visible lg:grid lg:grid-rows-6'>    
                    <h1>USEFUL LINKS</h1>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                </div>
                <div className='invisible sm:invisible md:invisible lg:visible lg:grid lg:grid-rows-6'>    
                    <h1>USEFUL LINKS</h1>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                        <h6 className='text-sm font-thin'>Lorem ipsum</h6>
                </div>
                <div className='grid grid-rows-3 place-items-center'> 
                    <div className='invisible sm:invisible md:visible lg:visible'>
                        <div className='grid grid-rows-1'>
                            <h1>OUR NEWSLETTER</h1>
                        </div>
                        <form class="w-full max-w-sm">
                            <div class="flex items-center border-b border-[#5a751c] py-2">
                                <input class="appearance-none bg-transparent border-none w-full text-[#c9c9c9] mr-3 py-1 px-2 leading-tight
                                focus:outline-none" type="text" placeholder="Email" aria-label="Full name"/>
                                <button class="flex-shrink-0 bg-[#5a751c] hover:bg-[#31400f] border-[#5a751c] hover:border-[#31400f]
                                text-sm border-4 text-white py-1 px-2 rounded" type="button">Sign Up</button>
                            </div>
                        </form>
                    </div> 
                    <div className='grid grid-cols-5 gap-4 mt-9'>
                        <a href='/' className=''><img src="./social/social_b-01.svg" alt="/" width={40}/></a>
                        <a href='/' className=''><img src="./social/social_b-02.svg" alt="/" width={40}/></a>
                        <a href='/' className=''><img src="./social/social_b-04.svg" alt="/" width={40}/></a>
                        <a href='/' className=''><img src="./social/social_b-05.svg" alt="/" width={40}/></a>
                        <a href='/' className=''><img src="./social/social_b-06.svg" alt="/" width={40}/></a>  
                    </div>
                </div>      
            </div>         
        </div>    
    </div>
  )
}

export default Footer