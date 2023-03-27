import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
    <div className='m-auto py-12 bg-[#151515] scroll-smooth -mt-20'>
      <div className='-mt-12'>
                <div className='absolute w-full h-full text-[#F2F2F2] max-h-[500px] 
                 bg-black/30 flex flex-col items-center justify-center place-items-center'>
                    <h1 className='mt-32 px-4 text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-italiana tracking-widest'>FAMIGLIA.</h1>
                    <h1 className='px-4 mb-18 mt-1 text-sm sm:text-sm md:text-base lg:text-xl font-worksans font-light tracking-widest'>OUR PHILOSOPHY ? YOUR PLEASURE FIRST.</h1>
                        <div className='grid grid-cols-2 place-items-center my-16 gap-8'>
                            <Link to="/Home"><button className='font-worksans p-2 pl-5 pr-5 bg-transparent border-2 border-[#F2F2F2] text-[#F2F2F2] text-base rounded-sm transition-colors duration-700 transform hover:bg-transparent hover:text-[#58731a] hover:border-[#58731a]'>TO HOME</button></Link>
                            <Link to="/Food"><button className='font-worksans p-2 pl-5 pr-5 bg-[#F2F2F2] border-2 border-[#F2F2F2] text-[#151515] text-base rounded-sm transition-colors duration-700 transform hover:bg-[#58731a] hover:text-gray-100 hover:border-[#58731a]'>TASTE US</button></Link>
                        </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-16 w-16 animate-bounce text-white -mb-96 mt-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" /></svg> */}
                </div>
                <img className='w-full max-h-[500px] object-cover' src="./food/roberta-sorge-uOBApnN_K7w-unsplash.jpg" alt="vegetables" />
      </div>     
       
    
    <div className='grid grid-cols-1 mt-28 md:grid-cols-2 my-10 mx-24 mb-44'>
      <div>
        <div className='col-span-4'>
          <img className='' src="./food/sam-hojati-M4hazNIyTsk-unsplash.jpg" alt="vegan food" width={375}/>
        </div>
      </div>
      <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1'>
        <p className='font-bold font-worksans text-sm text-[#7d9430] tracking-widest'>/ NEW OPENING</p>
        </div>
        {/* <div className='invisible sm:invisible md:visible lg:visible'>
          <img className='absolute -mt-20 object-right right-0 ml-20' src="./foodicons/lemon-03.svg" alt="" width={300}/>
        </div> */}
        <h2 className='text-5xl text-[#F2F2F2] font-italiana md:text-5xl lg:text-8xl py-3'>MAKE A DIFFERENCE, EAT VEGAN.</h2>
        <p className='font-worksans text-[#d5d5d5] font-light lg:text-justify py-10 max-w-2xl leading-7 opacity-90'>Step into the world 
        of plant-based gastronomy at our cutting-edge vegan restaurant. Our culinary team has crafted 
        a menu that showcases the boundless possibilities of vegan cuisine. Using only the freshest, 
        locally sourced ingredients, we offer an array of innovative dishes that tantalize the taste 
        buds and challenge traditional notions of what a plant-based meal can be. Come experience our 
        revolution in vegan dining and discover the delicious, healthy, and sustainable side of food.
        </p>
      </div>
    </div> 

   <div className='grid grid-cols-1 place-items-center mb-20 -mt-20'>
    <h1 className='text-9xl font-extralight font-worksans place-items-center text-[#7d9430]'>+</h1>
   </div>

    <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-1'>
                    <h1 className='text-xs md:text-xs lg:text-sm px-20 font-bold font-worksans text-[#7d9430] tracking-widest'>/ OPENING MENU</h1>
                    <h1 className='text-[#F2F2F2] font-italiana text-6xl md:text-6xl lg:text-8xl px-20 mb-4'>FAMIGLIA<br />CULINARY<br />SELECTIONS.</h1>
                <div className='px-20 max-w-2xl'>
                    <p className='text-justify text-[#d5d5d5] font-light leading-7 font-worksans py-10 opacity-90'>
                    We believe that the food we eat has a direct impact on our health, 
                    and that's why we choose only the freshest and most nutritious ingredients 
                    for our dishes. From hearty grain bowls to seasonal salads and freshly 
                    pressed juices, our menu is designed to provide you with a wholesome 
                    and satisfying meal that will nourish your body from the inside out.
                    </p> 
                    <p className='text-justify text-[#d5d5d5] font-light leading-7 font-worksans py-1 opacity-90 mb-36 -mt-4'>
                    So whether you're a longtime vegan or just looking to explore the world of plant-based eating, we invite you to come and experience the delicious,
                    healthy and sustainable cuisine that our restaurant has to offer.
                    </p> 
                </div> 
                <div className='grid grid-cols-1 place-items-center -mt-10 mb-10 '>
                   <Link to="/Food"><button className=' place-items-center font-worksans p-2 pl-5 pr-5 bg-[#58731a] border-2 border-[#58731a] text-[#F2F2F2] text-base rounded-sm transition-colors duration-700 transform hover:bg-[#F2F2F2] hover:text-[#222222] hover:border-[#F2F2F2]'>TASTE US</button></Link>
                </div>
                </div>
                <div className='grid grid-cols-1 mx-24 py-4'>
                    <img className='' src="./veganfood/monika-grabkowska-M1y4TFQ9zVk-unsplash.jpg" alt="" width={435}/>
                </div>  
            </div>
    </div>  
    )
}

export default About