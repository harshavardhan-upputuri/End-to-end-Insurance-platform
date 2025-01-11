import React, { useEffect, useState } from 'react'
import home1 from '../Assets/home1.png';
import home2 from '../Assets/home2.png';
import home3 from '../Assets/home3.png';
const Carousel = () => {
  const slides =[home1,home2,home3];
  const [curr,setCurr]= useState(0);
  const autoSlide=true;

  const prev= () => setCurr(curr => curr ===0 ? slides.length-1:curr-1);
  const next= () => setCurr(curr => curr ===slides.length-1 ?0 :curr+1);

  useEffect(()=>{
    if(!autoSlide) return
    const slideInterval = setInterval(next,3000);
    return () => clearInterval(slideInterval);

  },[])

  return (
    <div className=' relative top-[50px] left-[700px] overflow-x-hidden max-w-lg'>
      <div className='  overflow-hidden relative'>
      
      <div className=' flex   transition-transform ease-out duration-500' style={{transform:`translateX(-${curr*100}%)`}} >
        {slides.map((s,i)=>(
          
          <img key={i} className='w-full object-cover' src={s}/>
          
        ))}
        
      </div>

      <div className="flex gap-2 top-24 absolute items-center justify-between">
        <button  onClick={prev}  className="ml-7 mr-48 flex items-center justify-center bg-gray-300 text-black rounded-full w-8 h-8 text-lg shadow-md hover:bg-gray-400 transition">{`<`}</button>
        <button onClick={next}  className="ml-48 flex items-center justify-center bg-gray-300 text-black rounded-full w-8 h-8 text-lg shadow-md hover:bg-gray-400 transition">{`>`}</button>
    </div>


      
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_,i)=>(
            <div key={i} className={`transition-all w-3 h-3 bg-orange-500 rounded-full ${curr === i ? "p-2" :"bg-opacity-50"}`}></div>
          ))}
        </div>
      </div>

    </div>
    </div>
  )
}

export default Carousel
