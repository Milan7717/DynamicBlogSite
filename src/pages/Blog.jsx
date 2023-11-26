import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Blogcard from '../component/common/Blogcard'
import image1 from "../assets/react.svg";

const sampleDataFromApi = [
    {
        heading: "Heading first",
        description: "Desc first"
    },
    {
        heading: "Heading second",
        description: "Desc second"
    },
    {
        heading: "Heading third",
        description: "Desc third"
    },

]
const Blog = (props) => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>

                <div className=" lg:mx-24 md:mx-10 sm:mx-8">
                    <div className="my-8  p-4 rounded-lg ">

                        <h1 className="text-center my-8 text-4xl underline">The Feed</h1>


                        <div className="sm:mx-10 mx-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">

                            {/* here start */}

                            {/* map foreach */}

                            {sampleDataFromApi.map((singleData, index) => {
                                return (
                                    <Blogcard key={index} heading={singleData.heading} description={singleData.description} imagegallery={image1} />
                                )
                            })}
                            {/* here end */}




                        </div>


                        <div className="my-8 mx-12">
                            <a href="#"><button type="button"
                                className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2 my-4">Load
                                More</button></a>
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

export default Blog