import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
const [nav, setNav] = useState(false)

  return (

    <div className='mx-auto flex justify-between 
    items-center p-4 bg-gradient-to-r from-black via-[transparent] to-black z-50 sticky top-0 h-[70px]'>
        {/* lef side */}
        <div className='flex items-center ml-4'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <img src="./navbar-w.svg" alt="logomenu" width={20} />
            </div>
        <h1 className='text-2xl sm:text-2xl lg:text-3xl px-8'>
          <Link to="/Home"><span className='font-italiana text-[#F2F2F2]'>FAMIGLIA.</span></Link>
        </h1>
      </div>

       {/* search input */}
       {/* <div className='bg-[#F2F2F2] rounded-sm flex items-center px-2 width-
       [200px] sm:w-[400px] lg:w-[500px]'>
               <img src="./loupe.svg" alt="logomenu" width={20} />
               <input className='bg-transparent p-2.5 w-full 
               focus:outline-none font-worksans text-[12px]' type="text" 
               placeholder='SEARCH FOR THE PERFECT MEAL'/>      
       </div>       */}
      
    
    <div className='flex justify-between -space-x-6'>
    <button className='md:flex
    items-end font-worksans py-2.5 '>
        <img src="./heartnavbar.svg" alt="logocart" width={24}/>
    </button>
    <button className='md:flex
    items-end font-worksans py-2.5 '>
        <img src="./cart.svg" alt="logocart" width={27}/>
    </button>
    <Link to="/Login" ><button className='md:flex
    items-end font-worksans py-2.5 '>
        <img src="./user.svg" alt="logouser" width={26} className='' /> 
    </button></Link>
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
                <li className='text-lg py-4 flex'><img src="./user.svg" alt="logomenu" 
                width={17} className='mr-4'/>Home</li>
                <li className='text-lg py-4 flex'><img src="./user.svg" alt="logomenu" 
                width={17} className='mr-4'/>About us</li>
                <li className='text-lg py-4 flex'><img src="./user.svg" alt="logomenu" 
                width={17} className='mr-4'/>Menu</li>
                <li className='text-lg py-4 flex'><img src="./user.svg" alt="logomenu" 
                width={17} className='mr-4'/>Profile</li>
                <li className='text-lg py-4 flex'><img src="./cart.svg" alt="logomenu" 
                width={17} className='mr-4'/>Cart</li>
                <li className='text-lg py-4 flex'><img src="./heartnavbar.svg" alt="logomenu" 
                width={17} className='mr-4'/>Favourites</li>
                <li className='text-lg py-4 flex'><img src="./help.svg" alt="logomenu" 
                width={17} className='mr-4'/>Help</li>
            </ul>
        </nav> 

    </div>


    </div> 
  )
}

export default Navbar