import React from 'react'

const AcademicJourney = (props) => {
    return (
        <>

            {/* <!-- education section --> */}
            <div id="education" className="lg:mt-24 md:mt-18 sm:mt-14 mt-10">
                <h1 className="text-center md:text-3xl text-2xl font-bold my-10">My <span className="text-blue-400">Journey</span> </h1>
                <div className=" mx-2">
                    <h1 className="font-bold md:text-xl text-lg my-2">Education</h1>
                    <div className=" mt-4 mb-6">
                        <div className="content mb-6 border-2 border-sky-400 p-2 rounded-lg">
                            <p> <span className="font-semibold text-lg"> School</span> - {props.schoolName}</p>
                            <i className="fa-regular fa-calendar"></i> <span className="ml-2 text-blue-400">{props.joindate}-{props.enddate}</span>
                            <p className="my-1 md:my-2">{props.educationDescription}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcademicJourney