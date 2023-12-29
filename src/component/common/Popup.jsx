import React from 'react'

const Popup = (props) => {
    return (
        <div className='absolute top-[50%] left-[50%] min-h-[200px] min-w-[300px] rounded-md shadow-md shadow border bg-red-100'>

            <p>{props.message}</p>
            {/* You can customize the appearance or use a modal for a better user experience */}
        </div>
    )
}

export default Popup