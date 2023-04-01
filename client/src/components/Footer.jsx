import React from 'react'

const Footer = () => {
  return (
        <div className='bg-[#151515] text-white'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#5a751c]/50 py-7'>
                <h1 className='font-italiana font-light tracking-widest lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal md:w-2/5'>
                <span className='text-[#5a751c]'>FOLLOW</span> THE MOUVEMENT</h1>
                <div className='border-b border-[#5a751c] py-2'>
                    <input type="text" placeholder='Enter your email' className='font-worksans appearance-none bg-transparent border-none leading-tight text-[#F2F2F2] sm:w-72 w-full 
                    sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
                    <button className='bg-[#5a751c] hover:bg-[#455a15] duration-300 px-5 py-2.5 font-bold rounded-sm
                    text-white md:w-auto w-full'>Request code</button>
                </div>
            </div>

            <div className='grid grid-cols-1 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
                <ul>
                    <h1 className='mb-1 font-semibold'>TITLE</h1>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                </ul>
                <ul>
                    <h1 className='mb-1 font-semibold'>TITLE</h1>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                </ul>
                <ul>
                    <h1 className='mb-1 font-semibold'>TITLE</h1>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                </ul>
                <ul>
                    <h1 className='mb-1 font-semibold'>TITLE</h1>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                    <li><a href="/" className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6'>Some text</a></li>
                </ul>
            </div>

            <div className='grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
                <span>© Alice Bergonhe 2023. All Rights Reserved</span>
                <span>Designed by Alice Bergonhe</span>
                <div className='text-teal-500'>
                    <span className='p-1 cursor-pointer inline-flex items-center mx-1.5 text-xl hover:text-gray-100
                    hover:bg-teal-500 duration-300'><img src="./social/social_b-01.svg" alt="/" width={45}/></span>
                    <span className='p-1 cursor-pointer inline-flex items-center mx-1.5 text-lg hover:text-gray-100
                    hover:bg-teal-500 duration-300'><img src="./social/social_b-02.svg" alt="/" width={45}/></span>
                    <span className='p-1 cursor-pointer inline-flex items-center mx-1.5 text-xl hover:text-gray-100
                    hover:bg-teal-500 duration-300'><img src="./social/social_b-04.svg" alt="/" width={45}/></span>
                    <span className='p-1 cursor-pointer inline-flex items-center mx-1.5 text-xl hover:text-gray-100
                    hover:bg-teal-500 duration-300'><img src="./social/social_b-05.svg" alt="/" width={45}/></span>
                    <span className='p-1 cursor-pointer inline-flex items-center mx-1.5 text-xl hover:text-gray-100
                    hover:bg-teal-500 duration-300'><img src="./social/social_b-06.svg" alt="/" width={45}/></span>
                </div>
            </div>

        </div>





















    // <div className='h-[240px] w-full'>
    //     <div className=' text-[#c0c0c0] bg-[#000000] py-8 px-10'>
    //         <div className='grid grid-cols-4 '>
    //             <div className='grid grid-rows-4 -space-y-4 sm:grid sm:grid-rows-4 sm:-space-y-5'>
    //                 <h1 className='font-italiana text-white text-3xl'>FAMIGLIA.</h1> 
    //                 <h2 className='font-worksans text-sm font-thin py-2 '>254 West 54th Street<br />NY 10019 USA<br />+1 212-719-1300<br />Famiglia@gmail.com</h2>
    //             </div> 
    //             <div className='grid grid-rows-6'>    
    //                 <h1>USEFUL LINKS</h1>
    //                     <h6 className='text-sm font-thin'>→ Going Home</h6>
    //                     <h6 className='text-sm font-thin'>→ All about us</h6>
    //                     <h6 className='text-sm font-thin'>→ Terms of services</h6>
    //                     <h6 className='text-sm font-thin'>→ Privacy policy</h6>
    //             </div>
    //             <div className='grid grid-rows-6'>    
    //                 <h1>VEGAN LIFE</h1>
    //                     <h6 className='text-sm font-thin'>→ Cooking</h6>
    //                     <h6 className='text-sm font-thin'>→ Vegetables</h6>
    //                     <h6 className='text-sm font-thin'>→ Books</h6>
    //                     <h6 className='text-sm font-thin'>→ Join family</h6>
    //             </div>
    //             <div className='grid grid-rows-6'>    
    //                 <h1>WORK FOR US</h1>
    //                     <h6 className='text-sm font-thin'>→ Our culture</h6>
    //                     <h6 className='text-sm font-thin'>→ Job offers</h6>
    //                     <h6 className='text-sm font-thin'>→ Meet the team</h6>
    //                     <h6 className='text-sm font-thin'>→ Crew review</h6>
    //             </div>
    //             <div className='grid grid-cols-1 -space-y-20'> 
                    
    //                     <div className='grid grid-rows-1'>
    //                         <h1>OUR NEWSLETTER</h1>
    //                     </div>
    //                     <form class="w-full">
    //                         <div class="flex items-center border-b border-[#5a751c] py-2">
    //                             <input class="appearance-none bg-transparent border-none w-full text-[#c9c9c9] mr-3 py-1 px-2 leading-tight
    //                             focus:outline-none" type="text" placeholder="Email" aria-label="Full name"/>
    //                             <button class="flex-shrink-0 bg-[#5a751c] hover:bg-[#31400f] border-[#5a751c] hover:border-[#31400f]
    //                             text-sm border-4 text-white py-1 px-2 rounded" type="button">Sign Up</button>
    //                         </div>
    //                     </form>
                   
    //                 <div className='grid grid-cols-5 gap-4 mt-4 mb-4'>
    //                     <a href='/' className=''><img src="./social/social_b-01.svg" alt="/" width={40}/></a>
    //                     <a href='/' className=''><img src="./social/social_b-02.svg" alt="/" width={40}/></a>
    //                     <a href='/' className=''><img src="./social/social_b-04.svg" alt="/" width={40}/></a>
    //                     <a href='/' className=''><img src="./social/social_b-05.svg" alt="/" width={40}/></a>
    //                     <a href='/' className=''><img src="./social/social_b-06.svg" alt="/" width={40}/></a>  
    //                 </div> 
    //             </div>      
    //         </div>         
    //     </div>    
    // </div>
  )
}

export default Footer