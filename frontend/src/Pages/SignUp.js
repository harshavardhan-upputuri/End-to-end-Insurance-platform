import React from 'react'
import { assets } from '../Assets/assets'
import { FcGoogle } from "react-icons/fc";
import { FaIdCard } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className=' flex items-center  rounded-xl h-[900px]  shadow-xl '>
      {/* bg-[#EAF4F4] */}
      <div className='ml-[300px] -mr-[5px]   w-[600px]  '>
        <img className='h-[650px] rounded-l-xl' src={assets.signup} alt="" />
      </div>

      <div className=' relative -ml-[136px] h-[650px] w-[500px] rounded-r-2xl bg-blue-300'>
        <h2 className='absolute ml-[210px] top-[30px] transform -translate-x-1/2 text-[32px] font-bold text-[#2abb92]'>One Click to go</h2>
        <h2 className='absolute ml-[220px] top-[70px] transform -translate-x-1/2 text-[32px] font-bold '>Digital Insurance</h2>
         
        <form className='absolute left-1/2 transform -translate-x-1/2 flex flex-col   top-[180px]'>
          <div className="ml-[30px] w-[300px] gap-6 mb-6">

            <div className="relative flex  items-center  mb-6">
              <div className=' absolute ml-1 text-gray-300'><FaIdCard size={46} /></div>
              <input type="text" id="first_name" className="pl-14 pr-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Full name" required />
            </div>
            <div className="relative flex  items-center  mb-6">
              <div className=' absolute ml-1 text-gray-300'><FaIdCard size={46} /></div>
              <input type="text" id="first_name" className="pl-14 pr-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
            </div>
            <div className="relative flex  items-center  mb-6">
              <div className=' absolute ml-1 text-gray-300'><FaIdCard size={46} /></div>
              <input type="text" id="first_name" className="pl-14 pr-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your user name" required />
            </div>
            <div className="relative flex  items-center  mb-6">
              <div className=' absolute rounded-lg   text-gray-300'><RiLockPasswordLine size={34} /></div>
              <input type="password" id="password" className="pl-14 pr-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
            </div>
            <div className="relative flex  items-center  mb-6">
              <div className=' absolute rounded-lg   text-gray-300'><RiLockPasswordLine size={34} /></div>
              <input type="password" id="password" className="pl-14 pr-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required />
            </div>
          </div>

        
          <div className='ml-[30px]  '>
            <button type="button" className="w-[300px] text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>

          </div>
          {/* <div className="flex items-center mx-[32px] w-[300px] my-4">
            <div className="flex-grow border-t border-black"></div>
            <span className="mx-4 text-black">OR</span>
            <div className="flex-grow border-t border-black"></div>
          </div> */}

          {/* <div className='ml-[30px]  '>
            <button type="button" className="w-[300px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center pl-10"><FcGoogle size={30} /> <span className='ml-4 text-[20px]'>Sign Up with Google</span></button>

          </div> */}
          <div className="relative flex  items-center m-2  mb-4">
               
              <input type="checkbox" id="status" className='ml-8 mr-4 w-[30px] h-[20px]'  required />
              <label htmlFor="status" className=' text-[20px]'>Status</label>
            </div>
          <div className='ml-[30px]  '>
            <p >Already have an account? <span onClick={()=>navigate("/login")} className='ml-1 cursor-pointer text-blue-900'>Sign in</span></p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp