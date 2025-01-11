import React from 'react'
 
import { FaRegHeart } from "react-icons/fa6";
import { GoStar } from "react-icons/go";
 
const ProductsDisplay = ({selectedCategories}) => {
 
    return (
        <div className='flex mx-auto flex-wrap'>
            {
            // Products.map((product) => (
                selectedCategories.map((item,id)=>(
                    <div key={id} className="m-4 ml-[40px]  w-[400px] h-[400px] bg-white rounded-xl border ">
                    <div className='m-2  flex flex-col '>
                        <div className='flex gap-4 m-3'>
                            <img className='w-[70px] h-[70px] border rounded-full' src={item.image} alt="" />
                            <div className='mx-auto flex flex-col gap-2'>
                                <h2 className='font-bold text-[16px]'>{item.name}
                                    <br />
                                    {item.head} 
                                </h2>
                                <p className=' text-[12px]'>{item.sub_name}</p>
                                <p className='px-3 py-1 rounded-xl  text-[8px] bg-pink-400 w-14 items-center '>{item.type}</p>
                            </div>
                            <FaRegHeart />
                        </div>
                        <div className='flex flex-col gap-2  mt-6'>
                            <div className=' ml-4 flex gap-8'>
                                <div className='mr-4'>
                                    <h2>Premium</h2>
                                    <p className='font-bold'>Rs. {item.premium}*</p>
                                </div>
                                <div className='ml-4'>
                                    <h2>Coverage</h2>
                                    <p className='font-bold'>{item.coverage}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <p className='flex items-center'><span className='bg-blue-500 block  mr-2 w-2 h-0.5'></span>{item.desc.desc1}</p>
                                <p className='flex items-center'><span className='bg-blue-500 block  mr-2 w-2 h-0.5'></span>{item.desc.desc2}</p>
                                <p className='flex items-center'><span className='bg-blue-500 block  mr-2 w-2 h-0.5'></span>{item.desc.desc3}</p>
                                {/* <p className='flex items-center'><span className='bg-blue-500 block  mr-2 w-2 h-0.5'></span>Coverage even with Asthma,Blood pressure,Cholesterol and Diabetes</p>
                            <p className='flex items-center'><span className='bg-blue-500 block  mr-2 w-2 h-0.5'></span>Covers pre and post hospitalisation for 30 & 60 days respectively</p>
                            <p className='flex items-center'><span className='bg-blue-500 block  mr-2 w-2 h-0.5'></span>Covers 527 daycare procedures</p> */}
                            </div>

                        </div>
                        <div className=' mt-4 flex items-center justify-between  '>
                            <div className='ml-4 flex gap-2'>
                                {Array.from({length:item.rating}).map((_,i)=>(
                                    <GoStar key={i}/>
                                ))}
                            </div>
                            <button className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400  text-white rounded-2xl w-[150px] px-5 py-1 text-[20px]'>Know more</button>
                        </div>
                    </div>
                </div>
                ))
            // ))
            }
        </div>
    )
}

export default ProductsDisplay