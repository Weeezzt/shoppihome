/*import Header from "@/components/Header";
import React, { useEffect } from "react";

enum Role {
  general = "general",
  admin = "admin",
  agent = "agent",
}

interface User {
  userName: string;
  email: string;
  role: Role;
  savedListings: string[];
}

interface Listing {}

const Dashboard = () => {
  const [listings, setListings] = React.useState([]);

  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <div className="activity-feed">
        {listings.map((item, index) => (
          <div key={index} className="activity-item">
            <img src={item.user.profileImage} alt={item.user.name} className="profile-image" />
            <div className="activity-content">
              <span>
                <a href={`/user/${item.user.name}`}>{item.user.name}</a> saved
                <a href={item.listing.url}>{item.listing.title}</a>
              </span>
              <span className="activity-time">{item.listing.dateSaved}</span>
            </div>
            <img src={item.listing.image} alt={item.listing.title} className="listing-image" />
          </div>
        ))}
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
*/
