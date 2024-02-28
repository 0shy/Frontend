import React, { useState, useEffect } from 'react';

const Main = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sendLoginRequest = async () => {
    try {
      const email = 'solra036@gmail.com'; 
      const pw = '123123';

      const response = await fetch('https://354f-116-47-108-171.ngrok-free.app/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pw }),
      });

      setLoading(false);

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  useEffect(() => {
    sendLoginRequest();
  }, []);

  return (
    <div>
      <h2>Main Page</h2>
      {loading ? (
        <p>Loading user data...</p>
      ) : userData ? (
        <div>
          <p>User ID: {userData.id}</p>
          <p>User Name: {userData.name}</p>
          <p>User Email: {userData.email}</p>
        </div>
      ) : (
        <p>Error fetching user data</p>
      )}
    </div>
  );
};

export default Main;
