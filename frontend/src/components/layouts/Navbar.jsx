import React from 'react'
import { useState } from 'react'
import {HiOutlineMenu,HiOutlineX} from 'react-icons/hi';
import SideMenu from './SideMenu';


function Navbar({activeMenu}) {

    const [openSideMenu,setOpenSideMenu]=useState(false)

  return (
    <div className='flex gap-5 bg-white border border-b border-gray-200/50 backdrop:blur-[2px] py-4 px-7 sticky top-0 z-30' >
        <button
          className='block lg:hidden text-black'
          onClick={()=>{
            setOpenSideMenu(!openSideMenu);
          }}
        >
            {openSideMenu? (
                <HiOutlineX className='text-2xl' />
            ) : (
                <HiOutlineMenu className='text-2xl' />
            )
            }
        </button>

        <h2 className='text-2xl font-medium text-black' >ExpenseWise</h2>

        {openSideMenu && (
            <div className='flex absolute top-[61px] left-0 bg-white  ' >
                <SideMenu activeMenu={activeMenu} />
            </div>
        )}

    </div>
  )
}

export default Navbar