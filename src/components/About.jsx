import React from 'react'

const About = () => {
    return (
    <div className='m-auto px-4 py-12 bg-[#151515] scroll-smooth'>
    <div className='grid grid-cols-1 md:grid-cols-2 my-10 mx-24'>
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
    </div>  
    )
}

export default About