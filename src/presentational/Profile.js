import React from 'react'

const Profile = (props) => {
  return (
    <div>Profile Page
      <img src={JSON.parse(localStorage.getItem('user')).w3.Paa} alt="Profile"/>
    </div>
  )
}

export default Profile
