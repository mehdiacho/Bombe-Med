import React from 'react'
import { UserAuth } from '../config/auth-context'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/Sidebar';
import LineChart from '../components/charts';
import Chart from "../components/charts";
import '../components/Sidebar.css';

const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  return (
    <div>
      <SideBar />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}></div>
      <LineChart />
      <main>
        <div className="main_container">
          <div className="main__cards">
            <div className="card">
              <i className="fa fa-hotel fa-2x text-lightblue"></i>
              <div className="card_inner">
                <span className="font-bold text-title"></span>

              </div>
            </div>
            <div className="card">
              <i className="fa fa-user-o fa-2x text-lightblue"></i>
              <div className="card_inner">
                <span className="font-bold text-title"></span>

              </div>
            </div>
            <div className="card">
              <i className="fa fa-user-plus fa-2x text-lightblue"></i>
              <div className="card_inner">
                <span className="font-bold text-title"></span>
              </div>
            </div>
          </div>

          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>VOYAGE customer trend</p>
                </div>
                <i className="fa fa-usd"></i>
              </div>
              <Chart />

            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>VOYAGE revenue reports</p>
                </div>
                <i className="fa fa-user"></i>
              </div>

              <div className="charts__right_cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>0</p>
                </div>

                <div className="card2">
                  <h1>Total Bookings</h1>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home