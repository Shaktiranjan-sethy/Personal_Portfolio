import React, { useState, useContext } from "react";
import Pic from "../../public/rocky.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import myContext from '../context/data/myContext';
import ReactSwitch from 'react-switch';
// import { BsFillCloudSunFill } from 'react-icons/bs';
// import { FiSun } from 'react-icons/fi';
import pic from "../../public/photo.avif";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState(1);
  const [lastActiveNav, setLastActiveNav] = useState(null);

  const context = useContext(myContext)
  const { toggleMode, mode } = context

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  const handleNavClick = (id) => {
    setLastActiveNav(activeNav);
    setActiveNav(id);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="flex justify-between items-center h-16" data-aos="fade-down"
          data-aos-duration="1000" >
          <div className=" flex space-x-2">
            <Link
              to="Home"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              onClick={() => handleNavClick(1)}
            >
              <img src={Pic} className="h-12 w-12 object-cover flex-shrink-0 rounded-full cursor-pointer mt-1" alt="" />
            </Link>
            <h1 className="font-semibold lg:text-xl sm:text-lg text-md lg:mt-1.5 mt-2 sm:mt-1.5 cursor-pointer" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
              Shakti<span className="text-green-500 text-1xl">ranjan</span>
              <p className="text-xs lg:text-md sm:text-sm lg:-mt-1 sm:-mt-1 tracking-widest">Frontend Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div className="flex gap-8 flex-row ">
            <div className="flex lg:ml-5 mt-1 -mr-1">
              <ReactSwitch
                onChange={toggleMode}
                checked={mode === 'dark'}
                onColor="#0ef"
                offColor="#d1d1db"
                onHandleColor="#000"
                offHandleColor="#04439b"
                uncheckedIcon={false}
                checkedIcon={false}
                height={21}
                width={50}
                handleDiameter={14}
                boxShadow="0px 1px 10px #0ef"
                activeBoxShadow="0px 0px 5px 3px rgba(0, 0, 0, 0.5)"
              />
            </div>
            <div>
              <ul className="hidden md:flex space-x-8 mt-0.5">
                {navItems.map(({ id, text }) => (
                  <li
                    className={`hover:scale-105 duration-200 cursor-pointer relative ${activeNav === id ? '' : 'inactive-nav'} `}
                    key={id}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      onClick={() => handleNavClick(id)}
                      style={{ color: mode === 'dark' ? 'white' : 'black' }}
                    >
                      {text}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${activeNav === id ? 'underline-in' : lastActiveNav === id ? 'underline-out' : ''}`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div onClick={() => setMenu(!menu)} className="md:hidden mr-2 mt-0.5">
                {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={24} />}
              </div>
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-transparent backdrop-blur-md" style={{ backgroundColor: mode === 'transparent backdrop-blur-lg' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className={`hover:scale-105 duration-200 font-semibold cursor-pointer relative ${activeNav === id ? '' : 'inactive-nav'}`}
                  key={id}
                >
                  <Link
                    onClick={() => {
                      setMenu(!menu);
                      handleNavClick(id);
                    }}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${activeNav === id ? 'underline-in' : lastActiveNav === id ? 'underline-out' : ''}`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
