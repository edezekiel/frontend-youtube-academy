import React from 'react'
import { connect } from 'react-redux'

import Profile from '../presentational/Profile'
import GoogleAuthContainer from './GoogleAuthContainer'

const RootContainer = (props) => {
  return (
    <div>
      { props.user ? <Profile /> : <GoogleAuthContainer />}
    </div>
  )
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(RootContainer)
