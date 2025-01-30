import React from 'react'
import { assets } from '../Assets/assets'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
      const navigate = useNavigate();
    return (
        <div className='flex items-center  rounded-xl h-[700px]  shadow-xl bg-[#EAF4F4]'>
            <div className='ml-[300px] m-4  w-[600px]  '>
                <img className='h-[600px] rounded-l-xl' src={assets.login} alt="" />
            </div>

            <div className=' relative m-4 -ml-[20px] h-[600px] w-[500px] rounded-r-2xl bg-blue-300'>
                <h2 className='absolute left-1/2 top-[30px] transform -translate-x-1/2 text-[34px] font-bold'>Welcome Back!</h2>
                <form className='absolute left-1/2 transform -translate-x-1/2 flex flex-col   top-[100px]'>
                    <div className="ml-[30px] w-[300px] gap-6 mb-6">
                        <div className="  mb-6">
                            <label for="first_name" className="block mb-2 text-[22px] font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your name" required />
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block mb-2 text-[22px] font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                    </div>

                    <div className='ml-[200px] mb-6'>
                        <a href="#">Forget Password ?</a>
                    </div>
                    <div className='ml-[30px]  '>
                        <button type="button" className="w-[300px] text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>

                    </div>
                    <div className="flex items-center mx-[32px] w-[300px] my-4">
                        <div className="flex-grow border-t border-black"></div>
                        <span className="mx-4 text-black">OR</span>
                        <div className="flex-grow border-t border-black"></div>
                    </div>
                    <div className='ml-[30px]  '>
                        <button type="button" className="w-[300px] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center pl-10"><FcGoogle size={30} /> <span className='ml-4 text-[20px]'>Sign in with Google</span></button>

                    </div>
                    <div className='ml-[30px]  '>
                        <p >Don't have an account? <span onClick={()=>navigate("/signup")} className='ml-1 text-blue-900 cursor-pointer'>Create an Account</span></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login