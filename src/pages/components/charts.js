//npm install --save react-chartjs-2 chart.js
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { db } from '../../config/firebase';
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";


const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const LineChart = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = collection(db, "users");
  
    const fetchUsers = async () => {
      const snapshot = await getDocs(usersRef);
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(users); // log the fetched data to the console
      setUsers(users);
    };
  
    fetchUsers();
  }, []);
  
  

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Customers signing up through VOYAGE through the months",
        backgroundColor: "#666666",
        borderColor: "#666666",
        data: [
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 0
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 1
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 2
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 3
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 4
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 5
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 6
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 7
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 8
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 9
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 10
          ).length,
          users.filter(
            (user) => user.registrationDate && user.registrationDate.toDate().getMonth() === 11
          ).length,
        ],
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;