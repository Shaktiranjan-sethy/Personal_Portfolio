import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import myContext from '../context/data/myContext'

function Contact() {

    const context = useContext(myContext)
    const { mode } = context

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        let userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        try {
            await axios.post("https://getform.io/f/ebpdxpxb", userInfo);
            toast.success("Your message has been sent");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <>
            <div
                name="Contact"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
            >
                <h1 className="text-3xl font-bold mb-4" style={{ color: mode === 'dark' ? 'white' : '', }}>Contact me</h1>
                <span style={{ color: mode === 'dark' ? 'white' : '', }}>Please fill out the form below to contact me</span>
                <div className=" flex flex-col items-center justify-center mt-5"  data-aos="zoom-in"
                data-aos-duration="1000">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        action="https://getform.io/f/ebpdxpxb"
                        method="POST"
                        className="bg-slate-200 lg:w-96 sm:w-96 w-65 px-8 py-6 rounded-xl shadow-xl"
                    >
                        <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">FullName</label>
                            <input
                                {...register("name", { required: true })}
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your fullname"
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                {...register("email", { required: true })}
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your email address"
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Enter your Query"
                            />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
                        >
                            Send
                        </button>
                        <Toaster />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;