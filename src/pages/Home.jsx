import { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import RecentCard from '../component/common/RecentCard'
import image2 from "../assets/images/blogimg.jpeg"
import axios from 'axios'


const sampleDataFromApi = [
    {
        description: "Desc first",
        link: "/travelling"
    },
    {
        description: "Desc second",
        link: "https://www.youtube.com"
    },

]
const Home = (props) => {


    const [homeData, setHomeData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/home/');
                setHomeData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    const [quote, setQuote] = useState('');
    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');

            const newQuote = response.data.content;
            setQuote(newQuote);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        // Fetch a new quote when the component mounts
        fetchQuote();

        // Set up an interval to fetch a new quote every day (24 hours)
        const fetchInterval = setInterval(() => {
            fetchQuote();
        }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

        // Clean up the interval when the component unmounts
        return () => clearInterval(fetchInterval);
    }, []);


    const generateQuote = () => {
        fetchQuote();
    };
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>

                <div className="min-h-[692px] bg-cover flex justify-center flex-col"
                    style={{ backgroundPosition: "40% 30%", background:homeData.image }}>



                    <div className="mt-52 sm:mt-32 lg:mx-16 lg:mt-56  bg-black bg-opacity-30 shadow-2xl">
                        <h1
                            className="p-2 mb-2 sm:mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl  text-center mt-2 ">
                            Welcome to My World: So Glad You've Arrived.</h1>
                        {homeData.map((homepageData, index) => {
                            return (
                                <p className="indent-12 text-justify text-lg font-semibold text-white sm:p-4 p-2 md\:text-xl lg:text-3xl xl:px-16 ">
                                    {homepageData.description} </p>
                            )
                        })}


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
                                <span className="quote text-lg md:text-xl">{quote}</span>
                                <p className="namee text-red-700 text-xl font-semibold md:text-4xl pt-2">{props.description}</p>
                            </div>
                            {/* <div className="button-area">
                                <button onClick={generateQuote}
                                    className="new-quote btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2 my-4">New
                                    Quote</button>
                            </div> */}
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