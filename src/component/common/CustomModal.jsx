

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

function CustomModal({ open, setOpen,imagegallery }) {

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)}>
{/* <!------------- modal ------------> */}
        
          <div className="relative w-full h-full max-w-7xl md:h-auto flex flex-col items-center justify-center rounded-lg ">
            
            <div>
              <img src={imagegallery} alt="" className="w-[100%] object-cover rounded-lg" />
            </div>
            <div className='m-1'>
          <Button  onClick={() => setOpen(false)}>Close</Button>

        </div>
          </div>
        
        
      </Modal>
    </>
  );
}


export default CustomModal;