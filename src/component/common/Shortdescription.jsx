import React from 'react'

const Shortdescription = (props) => {
    const classLeftImage = "block  space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center  "
    const classRightImage = "block order-last  space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center"
    console.log(props)
    return (
        <>
            <div className="grid lg:grid-cols-3   md:grid-cols-2 grid-cols-1 md:gap-4  md:my-8 my-4 p-1 bg-red-200">

                {/* <!------------- modal ------------> */}
                <div className={props.isReversed ? classRightImage : classLeftImage}
                    data-modal-target="travelling-image1" data-modal-toggle="travelling-image1">

                    <img src={props.imagegallery} alt="" className="w-[50%]  object-cover rounded-lg" />


                </div>
                <div id="travelling-image1" tabindex="-1"
                    className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                    <div className="relative w-full h-full max-w-7xl md:h-auto flex flex-col items-center justify-center">

                        {/* <!-- Modal content --> */}
                        <div className="relative rounded-lg shadow ">
                            <div className="lg:col-span-1 flex sm:items-center ">
                                <img src={props.imagegallery} alt="" className="w-[100%] object-cover" />
                            </div>

                        </div>
                        <div className="   border-gray-200 rounded-b ">
                            <button data-modal-hide="travelling-image1" type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-2 py-1 sm:py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                        </div>
                    </div>
                </div>






                <div className="lg:col-span-2  sm:py-2 ">

                    <h1 className="text-center font-bold text-xl my-3 md:text-2xl ">{props.heading}</h1>
                    <p className="  md:text-xl text-lg indent-12 text-justify">{props.shortdescription}</p>
                </div>
            </div>
        </>

    )
}

export default Shortdescription