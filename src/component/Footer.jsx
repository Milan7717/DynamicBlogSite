import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer class="footer px-2 bg-gray-400 text-black shadow flex items-center justify-between rounded md:p-2">
    <div class="text-sm sm:text-center flex items-center justify-center ">
        <p class="">
            Copyright &copy; 2023 by Milan | All Rights Reserved.
        </p>
    </div>
    <div class="alpha mx-4 w-[2%] bg-red-500 m-1 ">
        <a href="#" class="p-1 bg-red-500"><i class="fa-solid fa-caret-up fa-2x"></i></a>
    </div>
</footer>
    </div>
  )
}

export default Footer