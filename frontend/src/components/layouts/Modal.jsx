import React from 'react'

function Modal({ children, isOpen, onClose, title }) {

    if(!isOpen) return null;

  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/10'>
      <div className='relative p-4 w-full max-w-2xl max-h-full'>
        {/* Modal Content */}
        <div className='relative bg-white rounded-lg shadow-sm'>
          {/* Modal header */}
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200'>
            <h3 className='text-lg font-medium text-gray-900'>
              {title}
            </h3>

            <button
              type="button"
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 inline-flex justify-center items-center cursor-pointer'
              onClick={onClose}
            >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 14"
                
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
             </svg>
            </button>
          </div>

          {/* Modal body */}
          <div className='p-4 md:p-5 space-y-4'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal