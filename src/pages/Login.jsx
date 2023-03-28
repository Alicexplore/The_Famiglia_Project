import React from 'react'

export const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full -mt-20'>
        <div className='hidden sm:block'>
          <img className='w-full h-screen object-cover' src='./food/jodie-morgan-v25z8P-CPB4-unsplash.jpg' alt='vegan food' width={50}/>
        </div>
        <div className='bg-[#151515] text-[#151515] flex flex-col justify-center font-worksans'>
          <form className='max-w-[400px] w-full mx-auto p-4'>
            <div className='py-20'>
            <h1 className='text-7xl sm:text-7xl md:text-7xl lg:text-7xl font-italiana -mt-6 text-center text-[#F2F2F2]'>FAMIGLIA.</h1>
            <h2 className='text-sm sm:text-sm md:text-sm lg:text-sm font-worksans text-center text-[#F2F2F2] opacity-70'>WE MAKE VEGAN FOOD NOT WAR.</h2>
            </div>
            <div className='flex flex-col py-2'>
              {/* <label className='text-[#F2F2F2] opacity-70'>Email</label> */}
              <input className='border p-2 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-white
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red invalid:text-red
            focus:invalid:border-red focus:invalid:ring-red' type="email" placeholder='Email'/>
            </div>
            <div className='flex flex-col py-2'>
              {/* <label className='text-[#F2F2F2] opacity-70'>Password</label> */}
              <input className='border p-2 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-white' type="password" placeholder='Password'/>
            </div>
            <button className='border w-full my-5 py-2 bg-[#5a751c] text-white font-medium border-none hover:bg-[#31400f]'>SIGN IN</button>
            <div className='flex justify-between'>
              <p className='flex items-center accent-black text-[#F2F2F2] opacity-70'><input className='mr-2' type="checkbox"/> Remember Me</p>
              {/* <a href='/'>Create an account</a> */}
            </div>
            <div className='text-center text-sm my-10 underline text-[#F2F2F2] opacity-70'>
              <a href='/'>Want to join us? Sign up now</a>
            </div>
          </form>
        </div>   
    </div>
  )
}