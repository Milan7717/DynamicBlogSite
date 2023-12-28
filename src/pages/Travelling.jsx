import React, { useState, useEffect } from 'react';

import Navbar from '../component/Navbar'
import axios from 'axios';

import ImageCarousel from '../component/common/ImageCarousel'
import image1 from "../assets/rr.svg";
import image2 from "../assets/react.svg";
import Longdescription from '../component/common/Longdescription';
import Descriptionbox from '../component/common/Descriptionbox';
import Imagecard from '../component/common/Imagecard';



// const sampleDataFromApi1 = [
//     {
//         heading1: "Heading first",
//         shortdescription: "Jyamdi Stupa is a hidden gem in the Kavreplanchok district of Nepal that offers a unique and off-the-beaten-path experience for travelers. The stupa is located at an altitude of 3428m, making it an ideal destination for adventure seekers and nature enthusiasts alike. The journey to Jyamdi Stupa is not for the faint-hearted, as it can only be reached via an off-road route. However, the rugged terrain adds to the charm of the place, and the picturesque views along the way are truly breathtaking. The area around Jyamdi Stupa is characterized by lush greenery and tranquil surroundings, making it a peaceful retreat from the hustle and bustle of city life. The stupa itself is a beautiful structure that exudes a sense of calm and spirituality. Visitors can spend hours exploring the intricate details of the stupa and admiring the stunning views of the surrounding landscape.",
//         isReversed: false,
//     },
//     {
//         heading1: "Heading second",
//         shortdescription: "Jyamdi Stupa is a hidden gem in the Kavreplanchok district of Nepal that offers a unique and off-the-beaten-path experience for travelers. The stupa is located at an altitude of 3428m, making it an ideal destination for adventure seekers and nature enthusiasts alike. The journey to Jyamdi Stupa is not for the faint-hearted, as it can only be reached via an off-road route. However, the rugged terrain adds to the charm of the place, and the picturesque views along the way are truly breathtaking. The area around Jyamdi Stupa is characterized by lush greenery and tranquil surroundings, making it a peaceful retreat from the hustle and bustle of city life. The stupa itself is a beautiful structure that exudes a sense of calm and spirituality. Visitors can spend hours exploring the intricate details of the stupa and admiring the stunning views of the surrounding landscape.",
//         isReversed: true,

//     },
//     {
//         heading1: "Heading third",
//         shortdescription: "Desc third",
//         isReversed: false
//     },

// ]

// const sampleDataFromApi = [
//     {
//         longdescription: "Desc first"
//     },


// ]





const Travelling = (props) => {

    
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
                <div>

                    <ImageCarousel id="travelling-carousel" imagegallery1={image1} imagegallery2={image2} imagegallery3={image1} />

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
                       

                        {/* <!------------- main story about blog data-------------------> */}
                        <div className="py-2 ">

                            {/* <!-------- jyamdi kavre ---------> */}
                            <div className="py-2 ">

                                <div>
                                    {aboutblogdata.map((aboutblogData, index) => (
                                        <Descriptionbox
                                            key={index}
                                            link={aboutblogData.link}
                                            heading={aboutblogData.heading}
                                            shortdescription={aboutblogData.short_description}
                                            imagegallery={aboutblogData.image}
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
                                
                           


     {/*------------- note if you need long description for the blog you can use from longdescription component ------------------------*/}

                                    <ImageCarousel id="travelling-carousel2" />



                                    {/* {sampleDataFromApi.map((singleData, index) => {
                                        return (
                                            <Longdescription key={index} longdescription={singleData.longdescription} />
                                        )
                                    })} */}
                                </div>


                            </div>


                            {/* <!------quote------------ --> */}
                            <div className="flex justify-center items-center my-10 ">
                                <div className=" bg-transparent border border-red-300 rounded-lg md:text-2xl text-xl sm:w-[60%] text-center p-4">
                                    <p><span className="capitalize italic  text-blue-500"> "Life is short and the world is wide, the sooner you start exploring it, the better."</span><br></br> - Simon Raven. </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="flex justify-end mb-10 mx-2">

                        <div className="">
                            <a href="./friends.html"><button type="button"
                                className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg sm:p-2 w-[8rem]">Next</button></a>

                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Travelling