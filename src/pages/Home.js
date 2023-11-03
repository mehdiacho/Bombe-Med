import React from 'react'
import { UserAuth } from '../config/auth-context'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      alert('Logging out')
    } catch (e) {
      console.log("There is an error");
    }
  };

  return (
    <div>
      <div>Home</div>
      <button type="submit"
        className={`btn btn-outline-warning`}
        style={{ borderRadius: '20px' }} onClick={handleLogout}> Log out</button>
    </div>
  )
}

export default Home