import React from 'react';
import EditProfile from './EditProfile';
import Nav from '../elements/nav';
// import Footer from '../DashboardHome/Footer'

function UpdateProfile() {
  return (
    <div className='updateProfile'>
      <EditProfile />
      <Nav />
    </div>
  );
}

export default UpdateProfile;
