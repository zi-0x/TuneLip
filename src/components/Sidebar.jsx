import { useState } from 'react';
import { NavLink } from 'react-router-dom' ;
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine} from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';


const NavLinks=({handLeClick}) =>(
  <div className="mt-10">
    {links.map((item)=>(
      <NavLink
        key={item.name} 
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-lg font-bold text-fuchsia-800 h-10 rounded-md hover:bg-gradient-to-tl from-yellow-300  to-purple-400"
        onClick={()=> handLeClick && handleClick()}
        >
          <item.icon className="w-6 h-7 mr-2"/>
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen ] = useState
  (false);

  return(
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4  ">
      <img src={logo} alt="logo" className="w-full h-14 object-contain "/>
      <NavLinks/>
    </div>

    <div className="absolute md:hidden block top-6 right-3 cursor-pointer  ">
    {mobileMenuOpen ? (
    <RiCloseLine className="w-6 h-6 text-purple-200 mr-2 hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}/>
    ) : (<HiOutlineMenu className="w-6 h-6 text-purple-200 mr-2 hover:text-yellow-400" onClick={() => setMobileMenuOpen(true)}/>)}
    </div>
    <div className={`absolute top-0 h-screen w-2/5 bg-purple-200  z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : 'left-full'}`}>
      <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
      <NavLinks handLeClick={() => setMobileMenuOpen(false)}/>
    </div>
    </>
  );
};

export default Sidebar;
