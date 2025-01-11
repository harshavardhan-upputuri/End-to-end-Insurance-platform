import React, { useState } from 'react'
import { assets } from '../Assets/assets'
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const navigate = useNavigate();
  const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyoutContent
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className='group relative h-fit w-fit'>
        <a className='relative text-[#6B7280] ' href={href}>
          {children}
          {/* <span style={{
            transform: showFlyout ?"scaleX(1)":"scaleX(0)",
          }} className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left  rounded-full bg-indigo-300 transition-transform duration-300 ease-out '/> */}
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: '-50%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='absolute left-1/2 top-12  bg-white text-black'>
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )

  }
  return (
    <div className='outer flex flex-col '>
      <div className='line-1 flex justify-between m-4 mt-2 items-center shadow-sm p-2'>
        <div className='lft pl-2'>
          <ul className='flex gap-3 text-[#6B7280] font-sans '>
            <li className='hover:text-[#000] cursor-pointer'>
              <a className='' href="#">About Us</a>
            </li>
            <li className='hover:text-[#000] cursor-pointer'>
              <a href="#">My account</a>
            </li>
            <li className='hover:text-[#000] cursor-pointer'>
              <a href="#">Bookmark</a>
            </li>
          </ul>
        </div>
        <div className="rgt pr-2">
          <ul className="flex gap-4 text-[#6B7280] font-sans">

            <li className="flex items-center" >
              <FlyoutLink href='#' FlyoutContent={() => <div className='h-24 w-24 bg-white p-4 shadow-xl'>
                <ul>
                  <li className="px-2 hover:text-[#6B7280]">
                    <a href="#">English</a>
                  </li>
                  <li className="px-2 hover:text-[#6B7280]">
                    <a href="#">German</a>
                  </li>
                  <li className="px-2 hover:text-[#6B7280]">
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>}>English</FlyoutLink> <MdKeyboardArrowDown />
            </li>


            <li className="flex items-center" >
              <FlyoutLink href='#' FlyoutContent={() => <div className='h-24 w-24 bg-white p-4 shadow-xl'>
                <ul>
                  <li className="px-2 hover:text-[#6B7280]">
                    <a href="#">INR</a>
                  </li>
                  <li className="px-2 hover:text-[#6B7280]">
                    <a href="#">USD</a>
                  </li>
                  <li className="px-2 hover:text-[#6B7280]">
                    <a href="#">GBP</a>
                  </li>
                </ul>
              </div>}>INR</FlyoutLink> <MdKeyboardArrowDown />
            </li>

            {/* My Policies */}
            <li className="hover:text-[#000] cursor-pointer">
              <a href="#">My policies</a>
            </li>
          </ul>
        </div>

      </div>
      <div className='line-2 flex justify-between  items-center shadow-sm px-4  ml-4 pb-2'>
        <div className='flex justify-between items-center gap-4 cursor-pointer'>
          <img className='w-[50px] h-[50px] rounded-full cursor-pointer' src={assets.logo} alt="" />
          <p>Insurance Company</p>
        </div>

        <div className="relative flex  items-center w-[600px]">

          <div className=' absolute left-3 text-slate-400'><CiSearch /></div>
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="UI Kits, Dashboards..."
          ></input>
        </div>

        
        <div className='items-center gap-0.5 w-24 flex flex-col'>
          <a href="#" ><FaRegUser /></a>
          <p>Account</p>
        </div>
        <div className='items-center gap-0.5 w-24 flex flex-col'>
          <a href="#"><FaRegHeart /></a>

          <p>Bookmark</p>

        </div>
        <div className='items-center gap-0.5 w-24 flex flex-col'>
          <a href="#"><IoCartOutline /> </a>
          <p>My Policies</p>
        </div>
      </div>
      <div className="line-3 flex justify-between  items-center shadow-sm px-4  m-4 pb-2 font-bold">
        <div className="lft pl-2">
          <ul className='flex gap-5 text-[#000] font-sans '>
            <li className='cursor-pointer px-2 flex items-center gap-1'>
              <a onClick={() => navigate('/')} className='' href="#">Home</a>
              <span ><MdKeyboardArrowDown /></span>
            </li>
            <li className='cursor-pointer  px-2 flex items-center gap-1'>
              <a onClick={() => navigate('/Products')} href="#">Products</a>
              <span ><MdKeyboardArrowDown /></span>
            </li>
            <li className='cursor-pointer  px-2'>
              <a href="#">Blog</a>

            </li>
            <li className='cursor-pointer  px-2'>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="rgt">
          <ul className='flex gap-5 text-[#000] font-sans '>
            <li className='cursor-pointer px-2 flex items-center gap-1'>
              <a className='' href="#">Trending Products</a>
              <span ><MdKeyboardArrowDown /></span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar