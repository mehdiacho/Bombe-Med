import React from 'react'
import { UserAuth } from '../config/auth-context'
import { useNavigate } from 'react-router-dom';
import ATopNav from './components/ATopNav'
import Sidebar from './components/Sidebar'

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  return (
    <div className={"container-fluid min-vh-100 bg-light d-flex flex-column home-page"}>
      <ATopNav/>
      <Sidebar/>
   </div>
  )
}

export default Home