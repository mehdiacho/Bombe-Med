import React from 'react'
import { UserAuth } from '../config/auth-context'
import { useNavigate } from 'react-router-dom';
import TrueSidebar from './components/TrueSidebar';

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  return (
    <div>
     
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}></div>
   </div>
  )
}

export default Home