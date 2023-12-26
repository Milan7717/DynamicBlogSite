import React, { useState, useEffect } from 'react';

import Navbar from '../component/Navbar'
import axios from 'axios';

// import ImageCarousel from '../component/common/ImageCarousel'
import Longdescription from '../component/common/Longdescription';
import Imagecard from '../component/common/Imagecard';
import Shortdescription from '../component/common/shortdescription';
const Friends = (props) => {



    const [detaildata, setblogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogdetail/');
                setblogData(response.data);

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

                {/* <ImageCarousel id="travelling-carousel" imagegallery1={image1} imagegallery2={image2} imagegallery3={image1} /> */}

            </div>

            <div className="lg:mx-4 md:mx-10 sm:mx-8">
                <div className="p-4 my-4">


                    {detaildata.map((blogdetailData, index) => (
                        <Longdescription
                            key={index}
                            link={blogdetailData.link}
                            heading={blogdetailData.heading}
                            longdescription={blogdetailData.long_description}
                            imagegallery={blogdetailData.image}
                        />
                    ))}


                    {/* <!------quote------------ --> */}
                    <div class="flex justify-center items-center my-10 ">
                        <div class=" bg-transparent border border-red-300 rounded-lg md:text-2xl text-xl sm:w-[60%] text-center p-4">
                            <p>As the philosopher Aristotle once said,<span class="capitalize italic  text-blue-900"> "In poverty and other
                                misfortunes of life, true friends are a sure
                                refuge. They keep the young out of mischief; they comfort and aid the old in their weakness, and they incite
                                those in the prime of life to noble deeds."</span></p>
                        </div>
                    </div>



                    {/* <!------------- main story about blog data  note: aboutblog or any models.py api data data can be added in any components-------------------> */}
                    {/* <!-- ----types of friendship ------> */}
                    

                    {aboutblogdata.map((setData, index) => (
                        <Shortdescription
                            key={index}
                            link={setData.link}
                            heading={setData.heading}
                            shortdescription={setData.short_description}
                        />

                    ))}

                    {aboutblogdata.map((aboutblogData, index) => (
                        <Imagecard
                            key={index}
                            link={aboutblogData.link}

                            imagegallery1={aboutblogData.image}
                            imagegallery2={aboutblogData.image}
                            imagegallery3={aboutblogData.image}
                        />

                    ))}

                </div>


            </div>
        

        </>

    )
}

export default Friends