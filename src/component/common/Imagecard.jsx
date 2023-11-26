import React from 'react'

const Imagecard = (props) => {
    return (

        <>

            <div class="flex justify-center flex-wrap gap-2  my-4 md:my-10">


                {/* <!------------- modal ------------> */}
                <div class="block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center"
                    data-modal-target="friends-image1" data-modal-toggle="friends-image1">


                    <img src={props.imagegallery} alt=""
                        class="sm:h-[300px] md:h-[300px] h-[150px] rounded-lg  object-cover object-center" />


                </div>
                <div id="friends-image1" tabindex="-1"
                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                    <div class="relative w-full h-full max-w-7xl md:h-auto flex flex-col items-center justify-center">
                        {/* <!-- Modal content --> */}
                        <div class="relative rounded-lg shadow lg:col-span-1 flex sm:items-center">

                            <img src={props.imagegallery} alt="" class=" w-[100%] object-cover object-center" />


                        </div>
                        <div class="  border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="friends-image1" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-2 py-1 sm:py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                        </div>
                    </div>
                </div>

                {/* <!------------- modal ------------> */}
                <div class="block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center"
                    data-modal-target="friends-image3" data-modal-toggle="friends-image3">


                    <img src={props.imagegallery} alt=""
                        class="sm:h-[300px] md:h-[300px] h-[150px] rounded-lg  object-cover object-center" />


                </div>
                <div id="friends-image3" tabindex="-1"
                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                    <div class="relative w-full h-full max-w-7xl md:h-auto flex flex-col items-center justify-center">
                        {/* <!-- Modal content --> */}
                        <div class="relative rounded-lg shadow lg:col-span-1 flex sm:items-center">
                            <img src={props.imagegallery} alt="" class=" w-[100%] object-cover object-center" />
                        </div>
                        <div class="  border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="friends-image3" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-2 py-1 sm:py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                        </div>
                    </div>
                </div>

                {/* <!------------- modal ------------> */}
                <div class="block space-y-4 md:space-y-0 md:space-x-4 cursor-pointer lg:col-span-1 flex items-center"
                    data-modal-target="friends-image2" data-modal-toggle="friends-image2">


                    <img src={props.imagegallery} alt=""
                        class="sm:h-[300px] md:h-[300px] h-[150px] rounded-lg  object-cover object-center" />


                </div>
                <div id="friends-image2" tabindex="-1"
                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                    <div class="relative w-full h-full max-w-7xl md:h-auto flex flex-col items-center justify-center">
                        {/* <!-- Modal content --> */}
                        <div class="relative rounded-lg shadow lg:col-span-1 flex sm:items-center">
                            <img src={props.imagegallery} alt="" class=" w-[100%] object-cover object-center" />
                        </div>
                        <div class="  border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="friends-image2" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-2 py-1 sm:py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Imagecard