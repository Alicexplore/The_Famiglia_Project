import React, { useState } from 'react'
import {data} from '../data/data.js'

const Food = () => {
const [foods, setFoods] = useState(data)

// filter type
    const filterType =(category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

// filter price
const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price;
        })
    );
};

    return (
        <div className='m-auto px-4 py-12 bg-[#151515] -mt-20'>

            <div className='mt-32'>
                <p className='text-[#F2F2F2] font-italiana text-6xl md:text-6xl lg:text-8xl mb-4 text-center'>VEGAN MENU.</p>
            </div>  
            
        <div className='mb-24 flex flex-row items-center content-center justify-center'>
            <div className='grid grid-cols-3 md:flex flex-row px-20 lg:flex-row'> 
                <div className='flex flex-col items-center hover:scale-125 duration-500 opacity-60 hover:opacity-100' >
                    <button onClick={()=> setFoods(data)}><img src="./foodicons/all.svg" alt="" width={35}/></button>
                    <button onClick={()=> setFoods(data)} className='text-sm font-extralight tracking-wide text-[#F2F2F2] font-worksans'>All</button>
                </div>
                <div className='flex flex-col items-center -ml-2 hover:scale-125 duration-500 opacity-60 hover:opacity-100'>
                    <button onClick={()=> filterType('Vegs')}><img src="./foodicons/vegs.svg" alt="" width={35}/></button>
                    <button onClick={()=> filterType('Vegs')} className='text-sm font-extralight tracking-wide text-[#F2F2F2] font-worksans'>Vegs</button>
                </div>
                <div className='flex flex-col items-center -ml-2 hover:scale-125 duration-500 opacity-60 hover:opacity-100'>
                    <button onClick={()=> filterType('Bowls')}><img src="./foodicons/entries.svg" alt="" width={35}/></button>
                    <button onClick={()=> filterType('Bowls')} className='text-sm font-extralight tracking-wide text-[#F2F2F2] font-worksans'>Bowls</button>
                </div>
                <div className='flex flex-col items-center -ml-2 hover:scale-125 duration-500 opacity-60 hover:opacity-100'>
                    <button onClick={()=> filterType('Dish')}><img src="./foodicons/plat.svg" alt="" width={35}/></button>
                    <button onClick={()=> filterType('Dish')} className='text-sm font-extralight tracking-wide text-[#F2F2F2] font-worksans'>Dish</button>
                </div>
                <div className='flex flex-col items-center -ml-2 hover:scale-125 duration-500 opacity-60 hover:opacity-100'>
                    <button onClick={()=> filterType('Fruits')}><img src="./foodicons/apple.svg" alt="" width={35}/></button>
                    <button onClick={()=> filterType('Fruits')} className='text-sm font-extralight tracking-wide text-[#F2F2F2] font-worksans'>Fruits</button>
                </div>
                <div className='flex flex-col items-center -ml-2 hover:scale-125 duration-500 opacity-60 hover:opacity-100'>
                    <button onClick={()=> filterType('Drinks')}><img src="./foodicons/drinks.svg" alt="" width={35}/></button>
                    <button onClick={()=> filterType('Drinks')} className='text-sm font-extralight tracking-wide text-[#F2F2F2] font-worksans'>Drinks</button>
                </div>
            </div>
        </div>  
            {/* <div className='flex flex-col lg:flex-row justify-between pt-10'>
               
                <div>
                    <p className='font-worksans text-[#F2F2F2] px-20'></p>
                    <div className='flex justify-between flex-wrap text-[#F2F2F2] text-sm px-20 mb-6'>
                        <button onClick={()=> setFoods(data)} className='m-1 bg-[#292929] hover:bg-[#374116] hover:text-[#b3b3b3]'>ALL</button>
                        <button onClick={()=> filterType('entries')} className='m-1 bg-[#292929] hover:bg-[#5a5a5a]'>ENTRIES</button>
                        <button onClick={()=> filterType('salads')} className='m-1 bg-[#292929] hover:bg-[#5a5a5a]'>SALADS</button>
                        <button onClick={()=> filterType('pasta')} className='m-1 bg-[#292929] hover:bg-[#5a5a5a]'>PASTA</button>
                        <button onClick={()=> filterType('desserts')} className='m-1 bg-[#292929] hover:bg-[#5a5a5a]'>DESSERTS</button>
                    </div>
                </div> 

               
                <div>
                    <p className='font-worksans text-[#F2F2F2]'></p>
                    <div className='flex justify-between maw-w-[390px] w-full font-worksans text-[#F2F2F2] text-sm px-20 '>
                        <button onClick={()=> filterPrice('€€')} className='m-1 bg-[#292929] hover:bg-[#5a5a5a]'>€€</button>
                        <button onClick={()=> filterPrice('€€€')} className='m-1 bg-[#292929] hover:bg-[#5a5a5a]'>€€€</button>
                        <button onClick={()=> filterPrice('€€€€')} className='m-1 bg-[#292929] hover:bg-[#5a5a5a]'>€€€€</button>
                    </div>
                </div>
            </div> */}

 
            
       

 {/* display foods */}
        <div className='grid grid-cols-1 px-20 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-6 mb-16'>
             {foods.map((item, index)=> (
                <div key={index} className=' text-[#F2F2F2] font-worksans hover:scale-105 duration-500'>
                    <img src={item.image} alt={item.name} 
                    className='w-full h-[250px] object-cover rounded-t-xl'
                    /> 
                    <div className='flex justify-between py-4'>
                        <div>
                            <div className='flex'>
                                <p className='font-worksans text-2xl'>{item.name}</p> 
                                <button className='px-2'><img src="./heartnavbargreen.svg" alt="like icon" width={20} /></button>
                            </div>
                        <p className='italic text-sm font-thin text-[#b2b2b2]'>{item.description}</p>
                        
                        <div className='py-3'>
                            <span className='text-sm italic'>{item.price} <span className='text-sm italic px-2 line-through text-[#7f7f7f]'>{item.realprice}</span></span>
                                <div className='flex flex-row space-x-6'>
                                <div className='flex items-center py-4'>
                                    <div className='flex items-center space-x-4'>
                                        <button className='font-worksans text-md text-black px-4 py-2 rounded-full bg-[#363636] hover:bg-[#474747]'>-</button>
                                        <span className='text-sm text-white'>0</span>
                                        <button className='font-worksans text-md text-black px-4 py-2 rounded-full bg-[#363636] hover:bg-[#474747]'>+</button>
                                    </div>   
                                </div> 
                                <div className='flex items-center py-2'>
                                    <button className='flex items-center gap-x-2 p-5 bg-[#637528] text-white text-xs font-worksans 
                                    justify-center py-2 px-4 rounded-sm hover:bg-[#788e30]'>
                                    <img src="./cart.svg" alt="/" width={25}/>ADD TO CART</button>
                                </div>    
                                </div> 
                        </div>
                        </div>
                    </div>
                </div>
             ) )}
        </div>
        <div className='section' id='recipe'>
            <div className='flex flex-col items-center'></div>
                <div className='text-3xl text-center font-bold'></div>

            </div>
        </div>
    )
};

export default Food