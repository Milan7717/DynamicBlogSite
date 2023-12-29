import React from 'react'

const SkillSetion = (props) => {
  return (
    <>
     <div className="text-center lg:mt-24 md:mt-18 sm:mt-14 mt-10">
                        <h1 className="text-center md:text-3xl text-2xl font-bold my-10">My <span className="text-blue-400"> Skills</span></h1>
                        {/* <!-- animation --> */}
                        {/* <div className="flex justify-center ">
                            <div id="animContainer" className=" md:w-[40%] w-[50%] my-4">acdvdj</div>
                        </div> */}

                        <div className="flex flex-wrap justify-between gap-4  mx-2">
                            <div className="border-2 border-sky-400 md:w-[48%] w-[100%] p-4 rounded-lg">
                                <h1 className="font-bold text-xl">Coding Skills</h1>
                                <div className="my-2">
                                    <div className="flex justify-between">
                                        <p>{props.codingHeading}</p>
                                       
                                    </div>
                                    <div className=" my-1"><span className="w-[90%]"> <p>{props.codingExperienceDescription}</p></span></div>

                                </div>
                                
                            </div>
                            <div className="border-2 border-sky-400 md:w-[48%]  w-[100%] p-4 rounded-lg">
                                <h1 className="font-bold text-xl">Professional Skills</h1>
                                <div className="my-2">
                                    <div className="flex justify-between">
                                        <p>{props.professionalHeading}</p>
                                       
                                    </div>
                                    <div className=" my-1"><span className="w-[90%]"> <p>{props.professionalExperienceDescription}</p></span></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

    </>
  )
}

export default SkillSetion