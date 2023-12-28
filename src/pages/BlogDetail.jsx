import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import Navbar from '../component/Navbar';
import image1 from "../assets/rr.svg";
import image2 from "../assets/react.svg";
import Longdescription from '../component/common/Longdescription';
import Descriptionbox from '../component/common/Descriptionbox';
import ImageCarousel from '../component/common/ImageCarousel';
import Imagecard from '../component/common/Imagecard';
import Quote from '../component/common/Quote';



const BlogDetail = () => {
    const { id } = useParams();

    const [detaildata, setblogData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogcard/');
                setblogData(response.data.filter((each, index) => each.id == id));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const [aboutblogdata, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/aboutblog/');
                setData(response.data);

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
                <div>

                    <ImageCarousel id="travelling-carousel" imagegallery1={image1} imagegallery2={image2} imagegallery3={image1} />

                </div>
                <div className="lg:mx-4 md:mx-10 sm:mx-8">
                    <div className="p-4 my-4">
                        
                        {detaildata.map((blogdetailData, index) => (
                            <Longdescription
                                key={index}
                                heading={blogdetailData.heading}
                                longdescription={blogdetailData.long_description}
                                imagegallery={blogdetailData.image}

                            />
                        ))}


                        {/* <!------------- main story about blog data-------------------> */}
                        <div className="py-2 my-4 ">

                            {/* <!--------  kavre ---------> */}


                            <div>
                                {aboutblogdata.map((aboutblogData, index) => (
                                    <Descriptionbox
                                        key={index}

                                        heading={aboutblogData.heading}
                                        shortdescription={aboutblogData.short_description}
                                        imagegallery={aboutblogData.image}
                                    />

                                ))}

                                {aboutblogdata.map((aboutblogData, index) => (
                                    <Imagecard
                                        key={index}


                                        imagegallery1={aboutblogData.image}
                                        imagegallery2={aboutblogData.image}
                                        imagegallery3={aboutblogData.image}
                                    />

                                ))}

                                <ImageCarousel id="travelling-carousel2" />

                                {/* <!------quote------------ --> */}

                                {aboutblogdata.map((aboutblogData, index) => (
                                    <Quote
                                        key={index}

                                        quote={aboutblogData.quote}
                                        author={aboutblogData.author}
                                    />

                                ))}



                                {/*------------- note if you need long description for the blog you can use from longdescription component ------------------------*/}






                            </div>





                        </div>

                    </div>


                    <div className="flex justify-end mb-10 mx-2">

                        <div className="">
                            <a href=""><button type="button"
                                className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg sm:p-2 w-[8rem]">Next</button></a>

                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default BlogDetail