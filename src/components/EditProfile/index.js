import React from 'react'
import EditProfile from './EditProfile'
import Nav from '../elements/nav'
// import Footer from '../DashboardHome/Footer'

function UpdateProfile () {
  return (
    <div
      className="updateProfile"
      // style={{
      //   background: "#F2F2F2",
      //   height: "90vh",
      // }}
    >
      <EditProfile />
      <Nav />
    </div>
  );
}

export default UpdateProfile
