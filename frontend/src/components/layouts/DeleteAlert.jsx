import React from 'react'

function DeleteAlert({content,onDelete}) {
  return (
    <div>
      <p className='text-lg'>{content}</p>

      <div className='flex justify-end mt-6 ' >
        <button
            type='button'
            className='add-btn add-btn-fill'
            onClick={onDelete}
        >
            Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert