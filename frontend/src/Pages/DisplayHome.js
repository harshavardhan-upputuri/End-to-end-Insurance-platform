import React from 'react'

import Carousel from '../components/Carousel';
import { features } from '../Assets/assets';

const DisplayHome = () => {
     
  return (
    <div className='relative flex flex-col'>  
      <div>
        <div className='top-[100px] absolute left-16 '>
          <h1 className='text-[36px]'>Let' find You<br/> the <span className='text-[48px] font-bold'>Best Insurance</span></h1>  
        </div>
        <Carousel/> 
      </div>

      <section className='grid grid-cols-4 gap-4 m-20'>
        {features.map((item,id)=>(
          <div key={id} className='w-[200px] h-[250px] flex flex-col gap-1 items-center shadow-custom border border-[#8d8d8d]  m-6    rounded-md  cursor-pointer shadow hover:shadow-2xl'>
            <div key={id} className="termlife bg-[#f3f4f4]  w-[180px] mt-4 h-[140px] rounded-md  px-1 flex items-center justify-center">
                <img className='  w-24 h-32    ' src={item.image} alt="" />
                
            </div>
            <div className='w-[190px] mt-10  h-8 '>
                  <p className='bg-white text-black text-[20px] font-bold  text-center' >{item.name}</p>
            </div>
          </div>
        ))}
      </section>

      
    </div>
  )
}

export default DisplayHome