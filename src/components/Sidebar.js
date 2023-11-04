import React, {useState} from 'react'
import {FaAmbulance,FaHouzz, FaBookMedical, FaList, FaBars, FaUsersCog, FaHome} from 'react-icons/fa'
import { NavLink} from 'react-router-dom';
import './Sidebar.css';

function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const menuItem = [
    {
      path: '/admindashboard',
      name: 'Inventory',
      icon: <FaHome />
    },
    {
      path: '/ght',
      name: 'Medicine Category ',
      icon: <FaHouzz />
    },
    {
      path: '/users',
      name: 'Medicine Type',
      icon: <FaAmbulance/>
    },
    {
      path: '/administrators',
      name: 'Medicine List ',
      icon: <FaBookMedical/>
    },
    {
      path: '/bookings',
      name: 'Expired Medicine List',
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