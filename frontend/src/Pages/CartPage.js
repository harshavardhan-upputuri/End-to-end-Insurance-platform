import React from 'react'
import { useSelector } from 'react-redux'
import ItemCart from '../components/ItemCart'
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Stepper from '../components/Stepper';
const CartPage = () => {
    const carts = useSelector(store => store.cart.Items);
    const navigate= useNavigate();
    
      return (
        <div className={`m-4 shadow-2xl  h-full  `}>
            <div className='   flex flex-col gap-10 items-center justify-between]'>
                <Stepper id={1}/>
            </div>
            <div className="flex justify-between ">
                <h2 className='p-5 text-2xl'>Policies</h2>
                <button onClick={()=>navigate("/")} className=' w-[30px] h-[30px]  m-4 mr-10 rounded-2xl  bg-red-600 text-white '><IoClose size={30} /></button>
                    
            </div>
            <div className='ml-[30px] p-2 flex text-[20px] font-bold'>
                 <p className='w-[500px] ml-[20px]'>item</p>
                 <p className='w-[200px] ml-[100px]'>price</p>
                 <p className='w-[200px] ml-[100px]'>know more</p>
                 <p className='w-[200px] ml-[100px]'>remove</p>
                 <p className='w-[200px] ml-[100px]'>Get Quote</p>
               
            </div>
            <div className='p-2'>

                {carts.map((item, key) => (
                    
                    <ItemCart key={key} data={item} />
                ))}
            </div>
            
        </div>
      )
}

export default CartPage