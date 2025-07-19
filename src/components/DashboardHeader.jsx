import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import NotificationAddTwoToneIcon from '@mui/icons-material/NotificationAddTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ImageAvatars = () => (
    <Avatar alt="Admin" src="https://mui.com/static/images/avatar/2.jpg" />
  );

  return (
    <div className="relative mb-6">
      <div className="flex items-center justify-between">
        <img src="https://www.puratos.in/etc.clientlibs/settings/wcm/designs/puratos2022/clientlib-preloaded/resources/img/svg/logo.svg" alt="Logo" className="h-12 w-auto mr-4" />
        <div className="text-center flex-1">
          <svg className="h-8 w-8 mx-auto mb-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v4a6 6 0 006 6h4a6 6 0 006-6V8a6 6 0 00-6-6h-4zm0 2h4a4 4 0 014 4v4a4 4 0 01-4 4h-4a4 4 0 01-4-4V8a4 4 0 014-4zm2 2a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
          </svg>
          <h1 className="text-2xl font-bold">My TRS Summary</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="md:flex hidden items-center space-x-4">
            <ImageAvatars />
            <span>Admin</span>
            <div className="flex space-x-2">
              <button className="text-blue-500"><SettingsApplicationsIcon/></button>
              <button className="text-red-500"><NotificationAddTwoToneIcon/></button>
              <button className="text-blue-500"><HelpTwoToneIcon/></button>
              <button className="text-blue-500"><LogoutTwoToneIcon/></button>
            </div>
          </div>
          <button
            className="md:hidden text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-4 md:hidden z-10">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <ImageAvatars />
                  <span>Admin</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="text-blue-500 w-full text-left"> <SettingsApplicationsIcon/></button>
                  <button className="text-red-500 w-full text-left"><NotificationAddTwoToneIcon/></button>
                  <button className="text-blue-500 w-full text-left"><HelpTwoToneIcon/></button>
                  <button className="text-blue-500 w-full text-left"><LogoutTwoToneIcon/></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;