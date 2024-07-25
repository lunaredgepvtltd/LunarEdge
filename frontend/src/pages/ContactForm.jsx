
import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const ContactForm = ({ onClose }) => {


    // handle handle button 

    const handleButton = ()=>{
        console.log('click')
    }

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-50">

            <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#236385] rounded-lg pr-7 pt-6">


                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">

                    {/* left side of form  */}
                    <div>
                        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
                        <p className="text-sm text-gray-300 mt-4 leading-relaxed">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                        <ul className="mt-12 space-y-8">


                            <li className="flex items-center">
                                <AiOutlineMail className='h-[16px] w-[16px] text-white' />
                                <a href="" className="text-white text-sm ml-4">
                                info@lunaredge.input
                                </a>
                            </li>


                            <li className="flex items-center">
                                <FiPhoneCall className='h-[16px] w-[16px] text-white' />
                                <a href="" className="text-white text-sm ml-4">
                                    <p>  9829011076 (Sandeep Katariya)</p>
                                </a>
                            </li>



                            <li className="flex items-center">
                                <FiPhoneCall className='h-[16px] w-[16px] text-white' />
                                <a href="" className="text-white text-sm ml-4">
                                    <p> 7760701155 (Sanjeev Ola)</p>
                                </a>
                            </li>



                            <li className="flex items-center">
                                <CiLocationOn className='h-[20px] w-[20px] text-white' />
                                <a href="" className="text-white text-sm ml-4">
                                    address-203, Manglam, Signature Tower, Lal Kothi, Gandhi Nagar, jaipur, Rajasthan
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* right side of form  */}

                    <div className='relative'>

                        {/* close icon  */}
                        <div className='absolute -right-9 -top-10 text-2xl font-black cursor-pointer' onClick={onClose}>
                            <RxCross1 />
                        </div>

                        {/* form container */}
                        <div className="bg-gray-100 p-6 rounded-lg">

                            <form action='POST' className="mt-8 space-y-4">
                                <input type='text' placeholder='Your Name'
                                    className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#06425f]" required/>
                                <input type='number' placeholder='Contact Number'
                                    className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#06425f]" required/>
                                <input type='email' placeholder='Email Address'
                                    className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#06425f]" required/>
                                <input type='text' placeholder='Subject'
                                    className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#06425f]"/>
                                <textarea placeholder='Message' rows="6"
                                    className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#06425f]"></textarea>
                                <button onClick={handleButton}
                                    className="text-white bg-[#1c4f6e] hover:bg-[#2b5c77e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                                    Send Message
                                </button>


                                <div className="text-right">
                                    <button type="button" onClick={onClose} className="text-[#1c4f6e] hover:underline">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ContactForm;

