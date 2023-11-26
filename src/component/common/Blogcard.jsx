import React from 'react'

const Blogcard = (props) => {
    return (
        <div className="rounded-xl border-1 border-slate-400  bg-gray-500 shadow-2xl shadow-black-500/50">


            {/* modal content */}
            <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 cursor-pointer "
                data-modal-target="blog-travelling" data-modal-toggle="blog-travelling">

                <img src={props.imagegallery} alt=""
                    className="h-[250px] w-[100%] object-cover  object-center object-center" />

            </div>
            <div id="blog-travelling" tabindex="-1"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div className="relative w-full h-full max-w-7xl md:h-auto flex flex-col items-center justify-center">

                    <div className="relative  rounded-lg shadow ">
                        <div className="lg:col-span-1 flex  items-center">
                            <img src={props.imagegallery} alt="" className=" object-cover  object-center" />
                        </div>

                    </div>
                    <div className="  border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="blog-travelling" type="button"
                            className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2 my-4">Close</button>
                    </div>
                </div>
            </div>


            <div className="p-5">
                <h1 className="text-center mb-2 text-xl md:text-2xl underline font-semibold ">{props.heading}</h1>
                <p className="text-justify text-lg md:text-xl ">{props.description}</p>
                <a href="/travelling"><button type="button"
                    className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2 my-4">See
                    More</button></a>

            </div>
        </div>
    )
}

export default Blogcard