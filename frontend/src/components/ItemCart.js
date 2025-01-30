import React, { useState, useEffect } from 'react'
import { items } from '../Assets/assets'
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../stores/cart'
import { useNavigate } from 'react-router-dom';
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
        <div className="flex flex-col rounded-xl m-2 shadow-lg w-full">
            <div className="bg-[#4c8eab] flex justify-between rounded-t-xl items-center">
                <div className="p-4 flex items-center gap-4">
                    <img onClick={() => navigate(`/singleproduct/${detail.id}`)} className="w-[70px] h-[70px] border rounded-full cursor-pointer" src={detail?.image || ""} alt="" />
                    <p className="font-bold  text-[20px]">
                        {detail?.name || ""} starting at Rs.{detail?.premium || ""}*
                    </p>
                </div>
                <div className="mr-4 flex items-center justify-between gap-4">
                    <button  onClick={() => navigate(`/singleproduct/${detail.id}`)} className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-2xl w-[150px] px-5 py-1 text-[20px]">
                        Know more
                    </button>
                    <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-2xl w-[120px] px-5 py-1 text-[20px]" onClick={handledelete}>remove</button>
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