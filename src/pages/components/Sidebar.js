import React, {useState} from 'react'
import {FaAmbulance,FaHouzz, FaBookMedical, FaList, FaBars, FaUsersCog, FaHome, FaBook} from 'react-icons/fa'
import { NavLink} from 'react-router-dom';
import './Sidebar.css';

function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const menuItem = [
    {
      path: '/src/pages/Home.js',
      name: 'Home',
      icon: <FaHome />
    },
    {
      path: '/inventory.js',
      name: 'Inventory',
      icon: <FaBookMedical />
    },
    {
      path: '/category.js',
      name: 'Medicine Category ',
      icon: <FaHouzz />
    },
    {
      path: '/suppliers.js',
      name: 'Suppliers',
      icon: <FaAmbulance/>
    },
    {
      path: '/bookings',
      name: 'Expired Medicine',
      icon: <FaList/>
    },
    
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Bombe-Med</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" class="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default SideBar;