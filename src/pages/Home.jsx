import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import RecentCard from '../component/common/RecentCard'
import image2 from "../assets/images/blogimg.jpeg"
const sampleDataFromApi = [
    {
        description: "Desc first",
        link: "https://www.facebook.com"
    },
    {
        description: "Desc second",
        link: "https://www.youtube.com"
    },

]
const Home = (props) => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>

                <div className="min-h-[692px] bg-[url('./img/IMG_20220609_223900.jpg')] bg-cover flex justify-center flex-col"
                    style={{ backgroundPosition: "40% 30%" }}>



                    <div className="mt-52 sm:mt-32 lg:mx-16 lg:mt-56  bg-black bg-opacity-30 shadow-2xl">
                        <h1
                            className="p-2 mb-2 sm:mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl  text-center mt-2 ">
                            Welcome to My World: So Glad You've Arrived.</h1>

                        <p className="indent-12 text-justify text-lg font-semibold text-white sm:p-4 p-2 md\:text-xl lg:text-3xl xl:px-16 ">
                            {props.description1} </p>

                    </div>
                </div>
            </div>
            <div>
                <div className=" lg:mx-24 md:mx-10 sm:mx-8">

                    <div className="my-10">
                        <h1 className=" text-center my-8 text-4xl underline">Recent Blogs</h1>

                        {sampleDataFromApi.map((singleData, index) => {
                            return (
                                <RecentCard link={singleData.link} key={index} description={singleData.description} imagegallery={image2} />
                            )
                        })}

                    </div>

                    <div className=" flex flex-col sm:items-center sm:justify-center text-center my-4">
                        <div className=" p-6 sm:w-[60%]">
                            <div className="text-center my-4 text-4xl underline">
                                <h1>Quote of the day</h1>
                            </div>

                            <div>
                                <span className="quote text-lg md:text-xl">{props.description3}</span>
                                <p className="namee text-red-700 text-xl font-semibold md:text-4xl pt-2">{props.description4}</p>
                            </div>
                            <div className="button-area">
                                <button
                                    className="new-quote btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2 my-4">New
                                    Quote</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Home