import React from 'react'
import { connect } from 'react-redux'

import ProfileContainer from './ProfileContainer'
import GoogleAuthContainer from './GoogleAuthContainer'

const RootContainer = (props) => {
  return (
    <div>
      { props.user ? <ProfileContainer /> : <GoogleAuthContainer />}
    </div>
  )
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(RootContainer)
