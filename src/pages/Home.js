import React from 'react'
import { UserAuth } from '../config/auth-context'
import { useNavigate } from 'react-router-dom';
import SideBar from './components/Sidebar';
import LineChart from './components/charts';
import Chart from "./components/charts";
import './components/Sidebar.css';

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  return (
    <div>
      <SideBar />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}></div>
   </div>
  )
}

export default Home