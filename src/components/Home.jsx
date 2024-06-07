import React, { useContext } from "react";

import pic from "../../public/photo.avif";
import Pic from "../../public/rocky.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { IoLogoHtml5 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import myContext from '../context/data/myContext'
import { ReactTyped } from "react-typed";

function Home() {

    const context = useContext(myContext)
    const { mode } = context

    const resumeLink = "https://drive.google.com/file/d/1BfLXW-7ZxdaZKfh4avsekd1V3pSDxX0L/view?usp=drivesdk";

    return (
        <>
            <div
                name="Home"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
            >
                <div className="flex flex-col gap-12 md:flex-row md:gap-4">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2  order-2 md:order-1" data-aos="fade-up-right" data-aos-duration="1000">
                        <span className="lg:text-2xl sm:text-2xl text-sm" style={{ color: mode === 'dark' ? 'white' : '', }}>Welcome In My Feed</span>
                        <div className="flex space-x-1 lg:text-4xl sm:text-4xl text-xl">
                            <h1 className="mr-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Hello, I'm a </h1>
                            {/* <span >Developer</span> */}
                            <ReactTyped
                                className="text-green-700 font-bold"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={80}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify" style={{ color: mode === 'dark' ? 'white' : '', }}>
                            Hi there! I'm Shaktiranjan Sethy, a passionate frontend developer eager to make my mark in the world of web development. I have a strong foundation in HTML, CSS, JavaScript , React , TailwindCss and Bootstrap and I'm constantly expanding my knowledge to stay up-to-date with the latest trends and technologies in the field.
                        </p>
                        <br />
                        {/* social media icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-8 md:space-y-0">
                            <div className="space-y-2">
                                <h1 className="font-bold text-center" style={{ color: mode === 'dark' ? 'white' : '', }}>Available on</h1>
                                <ul className="flex space-x-5" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <FaSquareFacebook className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <FaLinkedin className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target="_blank">
                                            <FaGithubSquare className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/" target="_blank">
                                            <FaTelegram className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" space-y-2">
                                <h1 className="font-bold text-center" style={{ color: mode === 'dark' ? 'white' : '', }}>Currently working on</h1>
                                <div className="flex space-x-5" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                    <IoLogoHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <TbBrandJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <SiTailwindcss className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">

                            <div className="space-y-5 mt-7">
                                <button class="gradient-border-btn bg-transparent hover:tracking-wider custom-shadow  text-black font-bold py-1 px-2 rounded shadow-lg transition-colors duration-300 ease-in" style={{ color: mode === 'dark' ? 'white' : '', }} >
                                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="check-resume-btn"><span>Check Resume</span></a>
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className=" md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1" data-aos="fade-up-left" data-aos-duration="1000">
                            <img
                                src={Pic}
                                className="object-cover rounded-full h-[360px] w-[360px] sm:h-[500px] sm:w-[500px] lg:h[500px] lg:w-[500px] mx-auto md:w-[500px] md:h-[500px] multiple-color "
                                alt=""
                            />
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
}

export default Home;