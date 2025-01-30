import React, { useState } from 'react'

import ProductsDisplay from '../components/ProductsDisplay';
import { items } from '../Assets/assets';
const Products = () => {
    const [rangeValue, setRangeValue] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState(items);
    const [selected, setSelected] = useState(null);
    const [sortby,setSortby]=useState("");

    const checkboxes = [
        {id:"selectall" ,name:"Select All"},
        { id: "termlife", name: "Term life" },
        { id: "health", name: "Health" },
        { id: "car", name: "Car" },
        { id: "bike", name: "Bike" },
        { id: "family", name: "Family" },
        { id: "travel", name: "Travel" },
        { id: "home", name: "Home" },
        { id: "Corp", name: "Corporate Insurance" },
    ];

    const handleCategoryChange = (category) => {
        setSelected(category);  
        if (category === "selectall") {
            setSelectedCategories(items);
        } else {
            const result = items.filter((curData) => {
                return curData.category === category;
            });
            setSelectedCategories(result);
        }

    }
    const handleChange = (e) => {
        setSelected();  
        setRangeValue(e.target.value);
        
    }
    const applyfilter =()=>{
        if(rangeValue === "0"){
            setSelectedCategories(items);
        }else{
            
            const result = items.filter((curData) => {
                return parseInt(curData.premium, 10) <rangeValue;
            });
            setSelectedCategories(result);
        }
        
    }
    const handleSelectChange = (event) => {
        setSortby(event.target.value);
        const sort=event.target.value;
        if(sort==="A-Z"){
            const sortedData = [...items].sort((a, b) =>
                a.name.localeCompare(b.name)
            );
             setSelectedCategories(sortedData);
        }else if(sort==="Z-A"){
            const sortedData = [...items].sort((a, b) =>
                b.name.localeCompare(a.name)
            );
            setSelectedCategories(sortedData);
        }
        
      };
   
    return (
        <div className='h-full flex m-4 mb-10'>
            <div className=' w-[250px] bg-white rounded border '>
                <div className="flex flex-col justify-between mx-4 m-4">
                    <p className='font-bold text-[16px]'>Filters</p>
                    <div className='flex items-center'>
                        <div className='flex items-center gap-8'>
                            <p>Price</p>
                            <input className='w-[70px] h-[35px] mt-2 rounded-md items-center px-2 border-2 border-[#c3cbdf]' onChange={handleChange} value={rangeValue} name="min" id="price" placeholder='0'></input>
                        </div>
                        {/* <hr className='h-0.25 w-4 mt-10 mx-4 mb-4  border-[#000000] ' />
                        <div className='flex flex-col justify-between'>
                            <p>Max Price</p>
                            <input className='w-[70px] h-[35px] mt-2 rounded-md items-center px-2 border-2 border-[#c3cbdf]' name="min" id="minid" placeholder='50'></input>
                        </div> */}
                    </div>
                    <div className='mt-2'>

                        <input type="range" min={0} step={5000} max={100000} value={rangeValue} onChange={handleChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </div>
                    <div className='mt-2 flex items-center justify-between'>
                        <p>Price {0}───{rangeValue}</p>
                        <button className='px-2  h-[30px] w-[60px] bg-[#d1cece] rounded-md items-center' onClick={()=>applyfilter()}>Filter</button>
                    </div>
                </div>
                <hr className=' w-[180px] mx-2' />
                <div className=' mx-4 m-2  overflow-y-auto overflow-x-hidden'>
                    <p className='font-bold text-[20px]'>Category</p>
                    <div className="flex flex-col mt-4 ">
                         
                         
                        {checkboxes.map((checkbox) => (
                            <div key={checkbox.id} className='flex items-center gap-1 mb-4'>
                                <input  type="checkbox" id={checkbox.id} name={checkbox.name} checked={selected === checkbox.id} onChange={() => handleCategoryChange(checkbox.id)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label className='ms-2 text-sm font-medium cursor-pointer'> {checkbox.name} </label>
                            </div>
                        ))}



                        <hr className='w-[180px] mb-4 ' />
                    </div>
                </div>

                {/* <div className='bottom-0 mt-4 ml-4 sticky zindex-1'>
                    <button className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400  text-white rounded-2xl w-[200px] px-5 py-1 text-[20px]'>Apply Now</button>
                </div> */}

            </div>

            <div className='h-full ml-[50px] w-[1000px] bg-white rounded border shadow-lg'>
                <div className="flex justify-between m-4">
                    <p>Results</p>
                    <form className="max-w-xl ">
                        <select id="countries" onChange={handleSelectChange} value={sortby} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-0.5 py-0.5 pr-4 w-[200px]" >
                            <option value="" >Sort By</option>
                            <option value="A-Z">Sort By A to Z</option>

                            <option value="Z-A">Sort By Z to A</option>

                        </select>
                    </form>
                </div>
                <div className="flex mx-auto  flex-wrap">
                    {
                        selectedCategories.map((item,id)=>{
                            return  <ProductsDisplay key={id} item={item} id={item.id} />

                        })
                    }
                    

                </div>
            </div>
        </div>
    )
}

export default Products