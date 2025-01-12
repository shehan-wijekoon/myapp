import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Website</div>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white hover:text-gray-300"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white hover:text-gray-300"}>About</NavLink></li>
          <li><NavLink to="/Post" className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white hover:text-gray-300"}>Post</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-white underline font-bold" : "text-white hover:text-gray-300"}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
