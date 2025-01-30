import React from 'react'
import { assets ,items} from '../Assets/assets'
import { useParams } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import { useNavigate } from 'react-router-dom';
const SingleItem = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const data=items[id];
    const dispatch = useDispatch();

    const handleAddToCart =()=>{
        dispatch(addToCart({
            productId:id,
            quantity:1
        }));
    }

    return (

        <div className='flex flex-col gap-2 mt-4'>
            <div className=' flex flex-col rounded-xl  m-2  shadow-lg'>
                <div className='bg-[#4c8eab] flex justify-between rounded-t-xl items-center  '>
                    <div className='p-4 flex items-center gap-4'>
                        <img className='w-[70px] h-[70px] border rounded-full' src={data.image} alt="" />
                        <p className='font-bold text-[#fff] text-[20px]'>{data.name} starting at Rs.{data.premium}*</p>
                    </div>
                    <div className='mr-4 flex items-center justify-between gap-4'>
                        <button onClick={handleAddToCart}  className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400  text-white rounded-2xl w-[170px]  px-5 py-1 flex items-center justify-center gap-2" draggable="false" >   <IoCartOutline size={30} /><span>Add to Cart</span> </button>
                        
                        <button onClick={() => navigate(`/application/${data.id}`)} className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400  text-white rounded-2xl w-[150px] px-5 py-1 text-[20px]'>Get Quote</button>
                    </div>

                </div>
                <div className='flex flex-col m-4 ml-8'>
                    <p className='font-bold text-[18px]'>Product HighLights</p>
                    <div className='flex gap-4 mt-2'>
                        <div className=' w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-500'>
                            <p>Medical expenses coverage up to {data.coverage}</p>
                        </div>
                        <div className=' w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-300'>
                            <p>{data.desc.desc1}</p>
                        </div>
                        <div className=' w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-700'>
                            <p>{data.desc.desc2}</p>
                        </div>
                        <div className=' w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-300'>
                            <p>{data.desc.desc3}</p>
                        </div>
                        <div className=' w-[350px] h-[100px] rounded-md shadow-lg p-2 border-2 border-gray-500 border-l-4 border-l-blue-500'>
                            <p>Exclusively for Bajaj Finance customers only</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='mx-auto mt-3 font-bold h-10 '>Key Highlights</h2>
            <div className="flex flex-wrap m-4  rounded-xl shadow-2xl   ">


                <div className='flex m-4 p-3  w-[370px] justify-between shadow-lg rounded-md border-2 border-gray-400 '>
                    <div className='m-4 w-[50px]'>
                        <img className='w-[30px] h-[30px]' src={assets.lupsum} alt="" />
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        <h2 className='font-bold text-[20px]'>Lump sum Benefit –</h2>
                        <p className='  text-[18px]'>Cover 586 Day care procedures even if hospitalization is less than 24 hours</p>
                        <ul>
                            <li className='list-disc   '> Group personal accident cover,</li>
                            <li className=' list-disc'> Group critical illness cover,</li>
                            <li className='list-disc'> Group hospital cash benefit</li>
                        </ul>

                    </div>
                </div>

                <div className='flex m-4 p-2  w-[370px] justify-between shadow-lg rounded-md border-2 border-gray-400 '>
                    <div className='m-4 w-[70px]'>
                        <img className='w-[100px] h-[50px]' src={assets.patient} alt="" />
                    </div>
                    <div className='ml-2 flex flex-col mt-2 gap-2'>
                        <h2 className='font-bold text-[20px]'>In-patient Hospitalization</h2>

                        <p className='mt-5  text-[16px]'>Covers in-patient hospitalization expenses like room rent, doctor's fees, surgery, tests, and medicines for stays over 24 hours.</p>


                    </div>
                </div>

                <div className='flex m-4 p-3  w-[370px] justify-between shadow-lg rounded-md border-2 border-gray-400 '>
                    <div className='m-4 w-[100px]'>
                        <img className='w-[100px] h-[30px]' src={assets.ambulance} alt="" />
                    </div>
                    <div className='flex flex-col ml-2 mt-2 gap-2'>
                        <h2 className='font-bold text-[20px]'>Road Ambulance Cover</h2>
                        <p className='  text-[18px]'>Cover for the cost incurred on transportation of the insured person to a hospital by a road ambulance, along with hospital transfers for specialty treatment.</p>


                    </div>
                </div>

                <div className='flex m-4 p-3  w-[370px] justify-between shadow-lg rounded-md border-2 border-gray-400 '>
                    <div className='m-4 w-[100px]'>
                        <img className='w-[70px] h-[50px]' src={assets.cashless} alt="" />
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        <h2 className='font-bold text-[20px]'>Cashless settlement</h2>
                        <p className='  text-[18px]'>Hassle-free, cashless treatment at any of our 10051+ network hospitals spread across 650+ cities</p>


                    </div>
                </div>

                <div className='flex m-4 p-3  w-[370px] justify-between shadow-lg rounded-md border-2 border-gray-400 '>
                    <div className='m-4 w-[100px]'>
                        <img className='w-[70px] h-[50px]' src={assets.cashless} alt="" />
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        <h2 className='font-bold text-[20px]'>Hassle Free Claims</h2>
                        <p className='  text-[18px]'>Get your cashless claims settlement in a hassle free manner within a short time of raising a claim.</p>

                    </div>
                </div>

                <div className='flex m-4 p-3  w-[370px] h-[250px] justify-between shadow-lg rounded-md border-2 border-gray-400 '>
                    <div className='m-4 w-[100px]'>
                        <img className='w-[70px] h-[30px]' src={assets.addon} alt="" />
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        <h2 className='font-bold text-[20px]'> Add-on Options</h2>
                        <p className='  text-[18px]'>Some of the add-on covers include accidental hospital cash, coma benefit, damage to personal protective equipment, etc.</p>


                    </div>
                </div>

            </div>
            

            <div className="flex flex-wrap m-4 p-6 rounded-xl shadow-2xl bg-gray-100">
               
                <div className="ml-8 mb-6">
                    <h2 className="font-bold text-[24px] text-blue-600 mb-2">Eligibility Criteria and Documents Required</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Anyone can apply for the Aditya Birla Group Activ Health plan as long as you meet the basic criteria mentioned below.
                        If you meet all the eligibility criteria, we will need some basic information to complete your application process for this health insurance plan.
                    </p>
                </div>

               
                <div className="flex flex-col md:flex-row justify-between w-full">
                   
                    <div className="ml-8 mb-6 md:mb-0">
                        <h2 className="font-bold text-[20px] text-blue-600 mb-2">Eligibility Criteria</h2>
                        <ul className="ml-4 list-disc text-gray-700 space-y-2">
                            <li>Exclusively for Bajaj Finance customers</li>
                            <li>Nationality: Indian</li>
                            <li>Age (adults): 18 years and above</li>
                            <li>Age (dependent children): 0-25 years</li>
                        </ul>
                    </div>

                  
                    <div className="m-4">
                        <h2 className="font-bold text-[20px] text-blue-600 mb-2">Documents Required</h2>
                        <p className="text-gray-700 leading-relaxed mb-2">
                            Only basic information is required when buying this policy:
                        </p>
                        <ul className="ml-4 list-disc text-gray-700 space-y-2">
                            <li>Date of birth as per the PAN card</li>
                            <li>Valid 10-digit mobile number</li>
                            <li>Residential PIN code</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col m-4 p-6 rounded-xl shadow-2xl '>
                <h2 className='mx-auto font-bold text-[24px]'>Why {data.sub_name}?</h2>
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col w-[200px] m-4'>
                        <img className='w-[70px] h-[70px] rounded-full' src={assets.activhealth} alt="" />
                        <h3 className='font-bold my-2'>Activ Health app</h3>
                        <p className="text-gray-700 leading-5">Track and improve your health, get rewarded with HealthReturns™, and access your policy, all from your smartphone.</p>

                    </div>
                    <div className='flex flex-col w-[200px] m-4'>
                        <img className='w-[70px] h-[70px] rounded-full' src={assets.gym} alt="" />
                        <h3 className='font-bold my-2'>Healthcare Network</h3>
                        <p className="text-gray-700 leading-5">Make convenient cashless payments at 6000+ network hospitals in 650+ cities in India. Get access to 800+ fitness centers, including gyms, yoga, dance classes &amp; more. </p>

                    </div>
                    <div className='flex flex-col w-[200px] m-4'>
                        
                        <img className='w-[70px] h-[70px] rounded-full' src={assets.customercare} alt="" />
                        <h3 className='font-bold my-2'>Anytime, anywhere 24x7 support</h3>
                        <p className="text-gray-700 leading-5">Reach out to our customer support team on WhatsApp and get your doubts and queries answered instantly.</p>

                    </div>
                    <div className='flex flex-col w-[200px] m-4'>
                        <img className='w-[70px] h-[70px] rounded-full' src={assets.claim} alt="" />
                        <h3  className='font-bold my-2'>Quick and easy claim settlement</h3>
                        <p className="text-gray-700 leading-5">Get claims processed faster by our in-house claim settlement team and receive an e-mail/SMS update within 2 hour.</p>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default SingleItem