import React from 'react'

const Project = (props) => {
    return (
        <>
            <div className="project lg:mt-24 md:mt-18 sm:mt-14 mt-10 mx-2">
                <h1 className="text-center md:text-3xl text-2xl font-bold my-10">My <span className="text-blue-400"> Project</span></h1>
                <div className="content mb-6 border-2 border-sky-400 px-3 p-2 rounded-lg">
                    <span className="font-semibold text-xl">{props.projectHeading}</span>
                    <p className="my-2">{props.projectDescription}</p>
                </div>
                
            </div>
        </>
    )
}

export default Project