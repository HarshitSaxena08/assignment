import React from 'react';

function ProtectedPage() {
  // Check if user is authenticated
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to login page if not authenticated
    window.location.href = '/login';
    return null;
  }

  // Get user info from local storage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {/* <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>This is a protected page.</p> */}



      <table class="table">
        <thead class="thead-dark">
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Email</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.dob.slice(0,10)}</td>
            <td>{user.email}</td>
            
          </tr>
        </tbody>
      </table>



    </div>
  );
}

export default ProtectedPage;
