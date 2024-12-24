import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/count');
        if (response.ok) {
          const data = await response.json();
          setTotalUsers(data);
        } else {
          console.error('Failed to fetch user count');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserCount();
    const intervalId = setInterval(fetchUserCount, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const pieData1 = {
    labels: ['Total', 'Courses', 'Mentorships'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  const pieData2 = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  const barData = {
    labels: [ 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Job Postings',
        data: [10, 20, 15, 30, 25, 40],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          '#36A2EB',
          '#FF6384',
          '#4BC0C0',
          '#9966FF',
          '#FFCE56',
          '#FF9F40'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="logo">Dashboard</div>
        <ul className="nav-menu">
          <li>Instructor</li>
          <li><Link to="/profession"> Courses</Link></li>
          <li><Link to="/add-course">Add Course</Link></li> {}
          <li>Messages</li>
          <li>Settings</li>
        </ul>
      </aside>
      <div className="main-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </div>
        
        <div className="cards-container">
          <div className="card">
            <h3>Total Courses</h3>
            <p>10</p>
          </div>
          
          <div className="card">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
        </div>

        <div className="charts-container">
          <div className="chart-section">
            <h2>Overview</h2>
            <div className="charts-wrapper">
              <div className="chart-wrapper">
                <Pie data={pieData1} />
              </div>
              <div className="chart-wrapper">
                <Pie data={pieData2} />
              </div>
            </div>
          </div>
          <div className="chart-section">
            <h2>Trending Courses</h2>
            <div className="chart-wrapper">
              <Bar data={barData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
