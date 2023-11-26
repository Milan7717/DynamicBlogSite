import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Contact = (props) => {
    return (
        <>
            <div>
                <Navbar />

            </div>
            <div>
                <div className="contact text-center">
                    <h1 className="underline text-4xl my-4">Contact <span className="text-blue-400">Me!</span></h1>
                    <div className="flex justify-center items-center">
                        <form action="#" className="md:w-[50%] sm:w-[80%] w-[100%] lg:w-[40%] text-lg" >
                            <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Name :</p>
                                <input className="p-2 sm:w-[80%] outline-none bg-transparent" type="text" placeholder="Full Name" required />
                            </div>
                            <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Mobile :</p>
                                <input className="p-2 sm:w-[80%] outline-none bg-transparent" type="text" placeholder="Mobile Number" />
                            </div>
                            <div className="flex items-center  mb-4 border-2 border-sky-400  rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Email :</p>
                                <input className="p-2 sm:w-[80%] outline-none bg-transparent" type="text" placeholder="Your Email" required />
                            </div>


                            <div className="textarea mb-4 flex outline-none  border-2 border-sky-400 rounded-lg">
                                <p className="sm:w-[20%] p-2 ">Message :</p>
                                <textarea className="sm:w-[80%] p-2 " name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="text-white mb-4">
                                <a><button type="submit"
                                    className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg sm:p-2 w-[8rem]">Submit</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

            <div>
               <Footer />
            </div>
        </>

    )
}

export default Contact