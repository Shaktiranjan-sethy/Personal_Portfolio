import React, { useContext } from "react";
import myContext from '../context/data/myContext'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {

    const context = useContext(myContext)
    const { mode } = context

    return (
        <>
            <hr />
            <footer className="py-12">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className=" flex flex-col items-center justify-center">
                        <div className="flex space-x-4" style={{ color: mode === 'dark' ? 'white' : '', }}>
                            <FaFacebook size={24} />
                            <FaTwitter size={24} />
                            <FaInstagram size={24} />
                            <FaLinkedinIn size={24} />
                        </div>
                        <div className="mt-6 border-t border-gray-700 pt-8 flex flex-col items-center">
                            <p className="text-sm mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                &copy; 2024 Your Company. All rights reserved.
                            </p>
                            <p className="text-sm mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Supportive Partner ❤️ Shakti</p>
                            <p className="mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Contact Me</p>
                            <div className="flex justify-center items-center gap-1" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                <MdOutlinePhoneAndroid />
                                <p>+916372667767</p>
                            </div>
                            <div className="flex justify-center items-center gap-1" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                <MdOutlineEmail />
                                <p>sethyshaktiranjan@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;