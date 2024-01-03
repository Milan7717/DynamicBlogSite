import { useState } from 'react'
import CustomModal from '../CustomModal'



const Aboutblog = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <>

            {/* // thiis box contains the data wiith short description and image  */}
            {props.imagegallery && 
                < div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4  md:my-8 my-4 p-1">

            {/* <!------------- modal ------------> */}
            <div className="block  space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center  ">

                <img src={props.imagegallery} onClick={() => setOpen(true)} alt="" className="w-[100%]  object-cover rounded-lg" />

                <CustomModal open={open} setOpen={setOpen} imagegallery={props.imagegallery} />
            </div>


            <div className="lg:col-span-2  sm:py-2 ">
                <h1 className="text-center font-bold text-xl my-3 md:text-2xl ">{props.heading}</h1>
                <p className="  md:text-xl text-lg indent-12 text-justify">{props.shortdescription}</p>
            </div>

        </div >

}

{/* image card images */ }
{
    props.imageCard && <div className="flex justify-center flex-wrap gap-2  my-4 md:my-10">

        {/* <!------------- modal ------------> */}

        <div className='block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center'>

            <img src={props.imageCard} onClick={() => setOpen(true)} alt="" className="sm:h-[300px] h-[150px] rounded-lg  object-cover object-center" />

            <CustomModal open={open} setOpen={setOpen} imageCardgallery={props.imageCard} />
        </div>
    </div>
}


{/* <!------quote------------ --> */ }
{
    props.quote && <div className="flex justify-center items-center my-10 ">
        <div className=" bg-transparent border border-red-300 rounded-lg md:text-2xl text-xl sm:w-[60%] text-center p-4">
            <p><span className="capitalize italic  text-blue-500"> "{props.quote}"</span><br></br> -{props.author}</p>
        </div>
    </div>
}


{
    props.longdescription && <div className=" py-2">
        <p className="md:text-xl text-lg indent-12 text-justify md:py-4 ">{props.longdescription}</p>

    </div>
}
        </>

    )
}

export default Aboutblog