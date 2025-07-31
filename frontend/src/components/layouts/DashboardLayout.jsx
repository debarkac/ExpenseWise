import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

function DashboardLayout({ children, activeMenu }) {
  const { user } = useContext(UserContext);

  return (
    <div className="">
      {/* Top Navbar */}
      <Navbar activeMenu={activeMenu} />

      {/* {console.log("🧑 Logged-in User in DashboardLayout:", user)} */}


      {/* Show dashboard only if user is logged in */}
      {user && (
        <div className="flex">
          {/* Sidebar */}
          <div className=" max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          {/* Main Content */}
          <div className="grow mx-5">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardLayout;