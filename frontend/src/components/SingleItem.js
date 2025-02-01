import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const SingleItem = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Extract the product id from the URL
    const [data, setData] = useState(null); // State to store the product data
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_BASE_URL = "http://localhost:3001";
                const response = await axios.get(`${API_BASE_URL}/policies/${id}`);
                const fetchedData = response.data.data;
                console.log(fetchedData);
                setData(fetchedData);
            } catch (error) {
                console.error("Error fetching the product:", error);
            }
        };
        fetchData();
    }, [id]);

    const handleAddToCart = async () => {
        if (!data) return;
        
        setLoading(true);
        
        const cartItem = {
            productId: id,
            name: data.name,
            price: data.premium,
            quantity: 1
        };

        try {
            // Send request to backend
            const response = await axios.post(
                "http://localhost:5000/api/cart/add", // Update backend URL if necessary
                cartItem,
                { withCredentials: true } // Ensure cookies (JWT) are sent
            );

            if (response.status === 200) {
                alert("Item added to cart successfully!");
                dispatch(addToCart(cartItem)); // Update Redux store
            }
        } catch (error) {
            console.error("Error adding to cart:", error.response?.data || error.message);
            alert("Failed to add item to cart.");
        } finally {
            setLoading(false);
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-col rounded-xl m-2 shadow-lg">
                <div className="bg-[#4c8eab] flex justify-between rounded-t-xl items-center">
                    <div className="p-4 flex items-center gap-4">
                        <img 
                            className="w-[70px] h-[70px] border rounded-full" 
                            src={`/Assets/${data.image}.png`} 
                            alt={data.name || "Product Image"} 
                        />
                        <p className="font-bold text-[#fff] text-[20px]">
                            {data.name} starting at Rs.{data.premium}*
                        </p>
                    </div>
                    <div className="mr-4 flex items-center justify-between gap-4">
                        <button 
                            onClick={handleAddToCart} 
                            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-2xl w-[170px] px-5 py-1 flex items-center justify-center gap-2" 
                            draggable="false"
                            disabled={loading}
                        >
                            <IoCartOutline size={30} />
                            <span>{loading ? "Adding..." : "Add to Cart"}</span>
                        </button>
                        <button 
                            onClick={() => data.id && navigate(`/application/${data.id}`)} 
                            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-2xl w-[150px] px-5 py-1 text-[20px]"
                        >
                            Get Quote
                        </button>
                    </div>
                </div>
                <div className="flex flex-col m-4 ml-8">
                    <p className="font-bold text-[18px]">Product Highlights</p>
                    <div className="flex gap-4 mt-2">
                        <div className="w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-500">
                            <p>Medical expenses coverage up to {data.coverage}</p>
                        </div>
                        <div className="w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-300">
                            <p>{data.desc?.desc1 || "Description not available"}</p>
                        </div>
                        <div className="w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-700">
                            <p>{data.desc?.desc2 || "Description not available"}</p>
                        </div>
                        <div className="w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-300">
                            <p>{data.desc?.desc3 || "Description not available"}</p>
                        </div>
                        <div className="w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-500">
                            <p>Exclusively for Bajaj Finance customers only</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="mx-auto mt-3 font-bold h-10 ">Why {data.sub_name || "this product"}?</h2>
        </div>
    );
};

export default SingleItem;
