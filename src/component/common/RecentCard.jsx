import React from 'react'

const RecentCard = (props) => {
    return (
        <>
            <div className="flex sm:items-center sm:justify-center ">
                <div className=" grid items-center justify-center  md:grid-cols-2 md:gap-5 gap-2  sm:w-[80%]">

                    <div>
                        <img src={props.imagegallery} className="h-[250px] md-h-[300px] w-[100%] object-cover rounded-lg object-center bg-center" />
                    </div>
                    <div className="p-2">
                        <p className="text-justify text-lg md:text-xl">{props.description}</p>
                        <a href={props.link}><button type="button"
                            className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2 my-4">See
                            More</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentCard