import React from 'react'
import { UserAuth } from '../config/auth-context'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../pages/components/Sidebar';

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}></div>
   </div>
  )
}

export default Home