import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard</h1>
      <p>Here, you can see an overview of your travel plans, safety zone updates, and recent activities.</p>
      
      <div className="dashboard-sections">
        <div className="dashboard-card">
          <h2>Upcoming Trips</h2>
          <p>No trips planned yet.</p>
        </div>

        <div className="dashboard-card">
          <h2>Safety Zone Updates</h2>
          <p>Check the latest updates on the safety status of your favorite travel destinations.</p>
        </div>

        <div className="dashboard-card">
          <h2>Booking History</h2>
          <p>You haven't booked any hotels yet. Browse and book safe stays now!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
