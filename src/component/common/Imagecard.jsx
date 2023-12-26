import React, { useState } from 'react'

import CustomModal from './CustomModal'

const Imagecard = (props) => {
    const [open, setOpen] = useState(false);

    return (

        <>

            <div class="flex justify-center flex-wrap gap-2  my-4 md:my-10">


                {/* <!------------- modal ------------> */}

                <div className='block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center'>

                    <img src={props.imagegallery1} onClick={() => setOpen(true)} alt="" className="sm:h-[300px] h-[150px] rounded-lg  object-cover object-center" />

                    <CustomModal open={open} setOpen={setOpen} imagegallery={props.imagegallery1} />
                </div>

                {/* <!------------- modal ------------> */}

                <div className='block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center'>

                    <img src={props.imagegallery2} onClick={() => setOpen(true)} alt="" className="sm:h-[300px] h-[150px] rounded-lg  object-cover object-center" />

                    <CustomModal open={open} setOpen={setOpen} imagegallery={props.imagegallery2} />
                </div>

                {/* <!------------- modal ------------> */}

                <div className='block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center'>

                    <img src={props.imagegallery3} onClick={() => setOpen(true)} alt="" className="sm:h-[300px] h-[150px] rounded-lg  object-cover object-center" />

                    <CustomModal open={open} setOpen={setOpen} imagegallery={props.imagegallery3} />
                </div>


            </div>
        </>
    )
}

export default Imagecard