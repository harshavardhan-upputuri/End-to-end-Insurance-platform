import React from 'react'
import Stepper from '../components/Stepper'
import { useParams } from 'react-router-dom'
import { items } from '../Assets/assets';
const Application = () => {
    const { id } = useParams();
    const data = items[id];

    return (
        <div className={`m-4 shadow-2xl  h-full   `}>
            <div className='   flex flex-col gap-10 items-center justify-between]'>
                <Stepper id={2} />
            </div>
            <div className=" p-4 flex items-center gap-4 w-full ">
                <img className="w-[70px] h-[70px] border rounded-full cursor-pointer" src={data?.image || ""} alt="" />
                <p className="font-bold  text-[20px]">
                    {data?.name || ""} starting at Rs.{data?.premium || ""}*
                </p>
            </div>


        </div>
    )
}

export default Application