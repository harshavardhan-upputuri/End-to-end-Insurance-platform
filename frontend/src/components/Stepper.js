import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import "./stepper.css"

const Stepper = ({id}) => {
    const steps = ["Cart", "Application form", "Approval" ,"Payment","You're Policy Holder"];
    const [currentStep, setCurrentStep] = useState(id);
     
    return (
        <>
            <div className='flex justify-between'>
                {steps?.map((step, i) => (

                    <div key={i} className={`step-item ${currentStep === i+1 && "active" } ${(i+1 < currentStep  )&& 'complete'} `}>
                        <div className='step'>{(i+1 < currentStep  ) ? <TiTick size={24} />: i+1 }</div>
                        <p className='text-gray-500'>{step}</p>
                    </div>
                ))}
            </div>
            {/* {
                !complete &&<button onClick={()=>{currentStep===steps.length? setComplete(true):  setCurrentStep((prev) => prev+1)}} className='bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1 '> {currentStep===steps.length ? 'Finish' : 'Next' } </button>

            } */}
            </>
    )
}

export default Stepper