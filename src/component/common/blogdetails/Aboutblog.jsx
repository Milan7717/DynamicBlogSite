import {useState} from 'react'
import CustomModal from '../CustomModal'



const Aboutblog = (props) => {

    const classLeftImage = "block  space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center  "
    const classRightImage = "block order-last  space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center"

    const [open, setOpen] = useState(false);

    return (
        <>

        
            {/* // thiis box contains the data wiith short description and image  */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4  md:my-8 my-4 p-1">

                {/* <!------------- modal ------------> */}
                <div className={props.isReversed ? classRightImage : classLeftImage}>

                    <img src={props.imagegallery} onClick={() => setOpen(true)} alt="" className="w-[100%]  object-cover rounded-lg" />

                    <CustomModal open={open} setOpen={setOpen} imagegallery={props.imagegallery} />
                </div>


                <div className="lg:col-span-2  sm:py-2 ">
                    <h1 className="text-center font-bold text-xl my-3 md:text-2xl ">{props.heading}</h1>
                    <p className="  md:text-xl text-lg indent-12 text-justify">{props.shortdescription}</p>
                </div>
            </div>

            {/* image card images */}
            <div class="flex justify-center flex-wrap gap-2  my-4 md:my-10">

                {/* <!------------- modal ------------> */}

                <div className='block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center'>

                    <img src={props.imageCard} onClick={() => setOpen(true)} alt="" className="sm:h-[300px] h-[150px] rounded-lg  object-cover object-center" />

                    <CustomModal open={open} setOpen={setOpen} imagegallery={props.imageCard} />
                </div>
            </div>

             {/* <!------quote------------ --> */}
             <div className="flex justify-center items-center my-10 ">
                <div className=" bg-transparent border border-red-300 rounded-lg md:text-2xl text-xl sm:w-[60%] text-center p-4">
                    <p><span className="capitalize italic  text-blue-500"> {props.quote}</span><br></br> {props.author}</p>
                </div>
            </div>

        </>

    )
}

export default Aboutblog