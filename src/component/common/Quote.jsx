import React from 'react'

const Quote = (props) => {
    return (
        <>
            {/* <!------quote------------ --> */}
            <div className="flex justify-center items-center my-10 ">
                <div className=" bg-transparent border border-red-300 rounded-lg md:text-2xl text-xl sm:w-[60%] text-center p-4">
                    <p><span className="capitalize italic  text-blue-500"> {props.quote}</span><br></br> {props.author}</p>
                </div>
            </div>
        </>
    )
}

export default Quote