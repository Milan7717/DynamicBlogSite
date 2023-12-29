import React from 'react'

const Blogdescription = (props) => {
    return (
        <>
            <h1 className="text-center font-bold text-2xl mt-3 mb-6 md:text-4xl underline">{props.heading}</h1>
            <div className=" py-2">
                <p className="md:text-xl text-lg indent-12 text-justify md:py-4 ">{props.longdescription}</p>

            </div>
           
        </>
    )
}

export default Blogdescription