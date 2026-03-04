import React from 'react'
import bgImage from '../../Assets/SignupBackground.png'
import { FaCheck, FaMarker, FaStar } from 'react-icons/fa'
const AuthLayout = ({ children }) => {
    return (
        <div className='w-full min-h-screen px-3 bg-center bg-cover bg-no-repeat'  style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex items-center p-3 gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center">
                    <div className='w-3 h-3 rounded-full bg-white'></div>
                </div>
                <span className="text-3xl sm:text-lg text-white font-semibold tracking-wide ">aps</span>
            </div>
            <div className="auth-container sm:px-15   sm:flex justify-between items-center ">


                <div className="auth-left sm:py-10">
                    <div className="auth-left min-h-[80vh] text-white flex flex-col justify-between p-12">

                        {/* Main Content */}
                        <div className="max-w-xl">
                            <h1 className="text-4xl font-semibold leading-tight">
                                Expert level Cybersecurity <br />
                                in <span className="text-[#0E9E9E]">hours</span> not weeks.
                            </h1>

                            <div className="mt-10">
                                <p className="text-sm text-gray-300 mb-4 font-medium">
                                    What’s included
                                </p>

                                <ul className="space-y-4 text-sm text-[#FFFFFF]">
                                    <li className="flex gap-3">
                                        <span className="text-[#187544]"><FaCheck/></span>
                                        Effortlessly spider and map targets to uncover hidden security 
                                        flaws
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#187544]"><FaCheck/></span>
                                        Deliver high-quality, validated findings in hours, not weeks.
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#187544]"><FaCheck/></span>
                                        Generate professional, enterprise-grade security reports automatically.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Trustpilot Section */}
                        <div className=''>
                            <p className="text-white-400 flex gap-1 text-sm font-medium">
                                <FaStar className='text-amber-300'/>
                                 Trustpilot</p>
                            <p className="text-white font-medium mt-1">
                                Rated 4.5/5.0{" "}
                                <span className="text-gray-400 text-sm">(100k+ reviews)</span>
                            </p>
                        </div>

                    </div>
                </div>


                <div className="auth-right min-h-screen flex items-center justify-center ">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default AuthLayout