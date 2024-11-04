import React, { useEffect, useState } from 'react';
import FinalPlayer from './music/FinalPlayer';
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

// import './Navbar.css'; // Move CSS to an external file

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [musicMode, setMusicMode] = useState(false);
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const sidebar = document.getElementById('sidebar');
    sidebar.style.top = `${navbar.clientHeight - 1}px`;
  }, []);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarVisible(!sidebarVisible);
  };
  const toggleMusicMode = () => {
    setMusicMode(!musicMode);
  };
  return (
    <>
      {/* Navbar */}
      <nav id="navbar" className="  w-screen fixed top-0 z-40 flex  flex-row justify-end  px-4 sm:justify-between">
        <ul className="breadcrumb hidden flex-row items-center py-4 font-extrabold text-3xl text-white sm:flex">
          <Link to="/" className="inline">
            <img className=' w-[100px]' src={logo} alt=" logo" />
          </Link>
        </ul>
        <button
          id="btnSidebarToggler"
          type="button"
          className="py-4 text-2xl text-white hover:text-gray-200"
          onClick={toggleSidebar}
        >
          {sidebarVisible ? (
            // Heroicon for Open (Cross Icon)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Heroicon for Closed (Hamburger Menu Icon)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Sidebar */}
      <div id="containerSidebar" className="z-40">
        <div className="navbar-menu relative z-40">
          <nav
            id="sidebar"
            className={`fixed left-0 bottom-0 flex w-3/4 flex-col overflow-y-auto bg-[#0a0e1b] pt-6 pb-8 sm:max-w-xs lg:w-80 transition-transform duration-300 ${
              sidebarVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Navigation group */}
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Main</h3>
              <ul className="mb-8 text-sm font-medium">
               <li>
                  <Link to="/" className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#homepage">
                    Home
                    
                  </Link>
                </li>
                <li>
                  <Link to="/beauty" className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#homepage">
                    Beauty
                    
                  </Link>
                </li>
                <li>
                  <button onClick={toggleMusicMode} className="flex items-center w-screen rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#link1">
                    <span className="select-none" >Muisc</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Another navigation group */}
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Legal</h3>
              <ul className="mb-8 text-sm font-medium">
                <li>
                  <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#tc">
                    <span className="select-none">Photo Booth</span>
                  </a>
                </li>
                <li>
                  <Link to="makeups" className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#privacy">
                    <span className="select-none">Makeups</span>
                  </Link>
                </li>
                <li>
                  <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#imprint">
                    <span className="select-none">Watch Videos</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Other navigation group */}
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">Others</h3>
              <ul className="mb-8 text-sm font-medium">
                <li>
                  <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#ex1">
                    <span className="select-none">Watch Videos</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#ex2">
                    <span className="select-none">Watch Videos</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mx-auto lg:ml-80"></div>
      </div>
      <div className='absolute w-screen   top-[50px] mx-auto  z-10 '>
        {/* Conditionally render FinalPlayer */}
        {musicMode && <FinalPlayer toggleMusicMode={toggleMusicMode} />}
      </div>

    </>
  );
};

export default Navbar;
