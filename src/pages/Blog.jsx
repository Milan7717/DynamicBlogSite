import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Blogcard from '../component/common/Blogcard'

import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Blog = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogcard/');
                setData(response.data);
                console.log(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


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

                            {/* {sampleDataFromApi.map((singleData, index) => {
                                return (
                                    <Blogcard key={index} link={singleData.link}  heading={singleData.heading} description={singleData.description} imagegallery={image1} />
                                )
                            })} */}
                            {/* here end */}

                            {data.map((blogData, index) => (
                                <Blogcard
                                    key={index}
                                    // link={blogData.link}
                                    heading={blogData.heading}
                                    description={blogData.description}
                                    imagegallery={blogData.image}
                                    id={blogData.id}
                                />
                            ))}




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