import React from 'react'

const Mainportfolio = (props) => {
    return (
        <>

            {/* <!-------------- home part  -------------> */}
            <div id="home"
                className="home min-h-[100vh] w-[100%]  flex flex-wrap-reverse justify-center">

                <div className="w-[100%] sm:w-[65%] md:w-[60%] lg:w-[50%] lg:mt-24  flex flex-col sm:justify-center  h-[90vh] mt-4">
                    <div className="mx-2">

                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:my-4 my-2">
                            Hi, I'm <span className="text-blue-500">Milan Mishra</span>
                        </h1>
                        <div className="text-animation">
                            <h2 className="font-bold md:text-3xl sm:text-2xl text-xl mb-2">
                                Frontend Developer
                            </h2>
                        </div>

                        <p>{props.portfolioDescription}</p>
                    </div>
                    <div className="my-4 mx-2">
                        <a href="/contact"><button type="button" className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2">Hire Me</button></a>
                        <button type="button" className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2">Lets Talk</button>
                    </div>

                    <div className="social md:mt-18 sm:mt-12 mt-8 mx-2">
                        <a href="#" className="mr-6 border-2 border-sky-400 "><i className="fa-brands fa-facebook fa-2x p-2"></i></a>
                        <a href="#" className="mr-6 border-2 border-sky-400 "><i className="fa-brands fa-twitter fa-2x p-2"></i></a>
                        <a href="#" className="mr-6 border-2 border-sky-400 "><i className="fa-brands fa-instagram fa-2x p-2"></i></a>
                        <a href="#" className="my-4 border-2 border-sky-400 "><i className="fa-brands fa-linkedin fa-2x p-2"></i></a>

                    </div>
                </div>

                <div className="w-[100%] sm:w-[35%] md:w-[40%] bg-yellow-80 flex justify-center  ">
                    <img src={props.portfolioImage} alt="" className="w-[50%] md:h-[60%] lg:h-[65%] sm:h-[50%] sm:w-[100%] sm:mr-4 md:mr-0 mt-8 bg-cover object-center" />
                </div>


            </div>

            {/* <!-- about section --> */}
            <div id="about" className="lg:mt-24 md:mt-18 sm:mt-14 ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center md:text-3xl text-2xl font-bold my-10">About <span className="text-blue-400">Me</span></h1>

                    <div className="md:h-[25rem] md:w-[25rem] h-[20rem] w-[20rem] flex relative justify-center items-center">
                        <img src={props.aboutMeImage} alt="" className="" />
                        <span className="circle-spin"></span>
                    </div>
                    <div className="my-6 mx-2">
                        <h1 className="font-bold text-xl md:text-3xl my-1 text-center">Frontend Developer</h1>
                        <p>{props.aboutMeDescription}</p>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Mainportfolio