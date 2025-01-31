import React, { useState, useEffect } from 'react'
import { items } from '../Assets/assets'
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../stores/cart'
import { useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
const ItemCart = (props) => {
    const navigate = useNavigate();
    const { productId } = props.data;
    const dispatch = useDispatch();
    const [detail, setDetail] = useState(null);
    useEffect(() => {

        const result = items.find((curData) => curData.id === productId);
        setDetail(result);
    }, [productId])
    const handledelete = () => {
        dispatch(deleteFromCart({
            productId: productId,
            
        }))
    }
    return (
        <>
    <div className="container flex justify-between items-center   p-2 gap-5 rounded-md">
        <div className="flex flex-col rounded-xl m-2  w-full">
            <div className=" flex justify-between rounded-t-xl items-center">
                <div className="p-4 flex items-center gap-4">
                    <img onClick={() => navigate(`/singleproduct/${detail.id}`)} className="w-[70px] h-[70px] border rounded-full cursor-pointer" src={detail?.image || ""} alt="" />
                    <p className="font-bold  text-[20px]">
                        {detail?.name || ""}  
                    </p>
                </div>
                <div className='absolute left-[620px]'>
                    <p className="font-bold  text-[20px]">
                    {detail?.premium || ""}*
                    </p>
                </div>
                <div className='absolute left-[900px]'>
                    <button  onClick={() => navigate(`/singleproduct/${detail.id}`)} className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-2xl px-5 py-1 text-[20px]">
                        Know more
                    </button>
                </div>
                <div className='absolute left-[1200px]'>
                    <button onClick={()=>navigate("/")} className=' w-[30px] h-[30px]  m-4 mr-10 rounded-2xl  bg-white-600 text-black '><IoClose size={30} /></button>
                                  
                </div>
                <div className='absolute left-[1480px]'>
                    
                    <button  onClick={() => navigate(`/application/${detail.id}`)}  className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-2xl w-[150px] px-5 py-1 text-[20px]">
                        Get Quote
                    </button>
                </div>
            </div>
            
            
        </div>
    </div>
</>

    )
}

export default ItemCart;