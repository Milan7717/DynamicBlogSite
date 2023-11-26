import React from 'react'

const Longdescription = (props) => {
    return (
        <>
            <div className=" py-2 md:py-4 ">
                <p className="md:text-xl text-lg indent-12 text-justify ">{props.longdiscription}</p>

            </div>
        </>
    )
}

export default Longdescription