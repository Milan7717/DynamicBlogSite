import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import Navbar from '../component/Navbar';
import image1 from "../assets/rr.svg";
import image2 from "../assets/react.svg";
import Blogdescription from '../component/common/blogdetails/Blogdescription';
import ImageCarousel from '../component/common/blogdetails/ImageCarousel';
import Aboutblog from '../component/common/blogdetails/Aboutblog';
// import Aboutblog from '../component/common/blogdetails/Aboutblog';




const BlogDetail = () => {
    const { id } = useParams();

    const [detaildata, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogdetail/');
                setData(response.data.filter((each, index) => each.id == id));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const [aboutBlogdata, setBlogData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/aboutblog/');
                setBlogData(response.data.filter((each, index) => each.id == id));
                

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

                <div className="lg:mx-4 md:mx-10 sm:mx-8 my-4">


                    {/* blog description  */}

                    {detaildata.map((blogdetailData, index) => (
                        
                            <Blogdescription
                                key={index}
                                heading={blogdetailData.heading}
                                longdescription={blogdetailData.long_description}
                                imagegallery={blogdetailData.image}

                            />
                       
                    ))}
                    {aboutBlogdata.map((aboutblogData, index) => (
                        
                        <Aboutblog
                        key={index}
                        heading={aboutblogData.heading}
                        longdescription={aboutblogData.long_description}
                        shortdescription={aboutblogData.short_description}
                        quote={aboutblogData.quote}
                        author={aboutblogData.author}
                        imagegallery={aboutblogData.image}
                        imageCard={aboutblogData.imageCard}
                        
                        />
                       
                    ))}

                   



                </div>

            </div>

        </>

    )
}

export default BlogDetail