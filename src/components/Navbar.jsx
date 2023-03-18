import React, {useState} from 'react'
// import {AIOutlineMenu} from 'react-icons/ai'

function Navbar() {
const [nav, setNav] = useState(false)

  return (

    <div className='mx-auto flex justify-between 
    items-center p-4 bg-transparent relative z-50'>
        {/* lef side */}
        <div className='flex items-center ml-4'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <img src="./navbar-w.svg" alt="logomenu" width={20} />
            </div>
        <h1 className='text-2xl sm:text-2xl lg:text-3xl px-8'>
          <span className='font-italiana text-[#F2F2F2]'>FAMIGLIA.</span> 
        </h1>
         {/* <div className='font-worksans hidden lg:flex items-center bg-[#F2F2F2] 
        rounded-sm p-1 text-[12px]'>
            <p className='bg-[#5e6f26] text-[#F2F2F2] rounded-sm 
            p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>  */}
      </div>

       {/* search input */}
       {/* <div className='bg-[#F2F2F2] rounded-sm flex items-center px-2 width-
       [200px] sm:w-[400px] lg:w-[500px]'>
               <img src="./loupe.svg" alt="logomenu" width={20} />
               <input className='bg-transparent p-2.5 w-full 
               focus:outline-none font-worksans text-[12px]' type="text" 
               placeholder='SEARCH FOR THE PERFECT MEAL'/>      
       </div>       */}
         {/* cart button */}
    
    <div className='flex justify-between -space-x-6'>
    <button className='md:flex
    items-end font-worksans py-2.5 '>
        <img src="./heartnavbar.svg" alt="logocart" width={27}/>
    </button>
    <button className='md:flex
    items-end font-worksans py-2.5 '>
        <img src="./cart.svg" alt="logocart" width={30}/>
    </button>
    <button className='md:flex
    items-end font-worksans py-2.5 '>
        <img src="./user.svg" alt="logouser" width={28} className='' /> 
    </button>
    </div>

    {/* mobile menu */}
    {/* overlay */}
    {nav ? <div className='bg-[#151515]/50 fixed w-full h-screen z-10 top-0
    left-0'></div> : ' '}


    {/* side drawer menu */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-[#151515] z-10 duration-300' 
    : 'fixed top-0 left-[-100%] w-[400px] h-screen bg-[#151515] z-10 duration-1000 delay-300' }>
        <img src="./greencross.svg" alt="logocart" onClick={()=> setNav(!nav)} 
        width={20} className='absolute right-6
        top-6 cursor-pointer' /> 
        <h2 className='font-italiana text-4xl text-white p-4 '>FAMIGLIA.</h2>  
        <nav>
            <ul className='font-worksans font-thin flex flex-col p-4 text-white'>
                <li className='text-lg py-4 flex'><img src="./delivery.svg" alt="logomenu" 
                width={15} className='mr-4'/>Orders</li>
                <li className='text-lg py-4 flex'><img src="./heart.svg" alt="logomenu" 
                width={15} className='mr-4'/>Favorites</li>
                <li className='text-lg py-4 flex'><img src="./wallet.svg" alt="logomenu" 
                width={15} className='mr-4'/>Wallet</li>
                <li className='text-lg py-4 flex'><img src="./promotions.svg" alt="logomenu" 
                width={15} className='mr-4'/>Promotions</li>
                <li className='text-lg py-4 flex'><img src="./help.svg" alt="logomenu" 
                width={15} className='mr-4'/>Help</li>
                <li className='text-lg py-4 flex'><img src="./friends.svg" alt="logomenu" 
                width={15} className='mr-4'/>Invite Friends</li>
            </ul>
        </nav> 

    </div>


    </div> 
  )
}

export default Navbar