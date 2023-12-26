import React from 'react'

const Shortdescription = (props) => {
  return (
    
    <>
 <div class=" my-4  md:text-xl text-lg  text-justify">
        <p><span class="font-bold underline"> {props.heading}: </span>{props.shortdescription}</p>
     
      </div>

    </>
  )
}

export default Shortdescription