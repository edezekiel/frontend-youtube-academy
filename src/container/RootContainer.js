import React from 'react'
import { connect } from 'react-redux'

import SearchContainer from './SearchContainer'
import GoogleAuthContainer from './GoogleAuthContainer'

const RootContainer = (props) => {
  return (
    <div>
      { props.user ? <SearchContainer /> : <GoogleAuthContainer />}
    </div>
  )
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(RootContainer)
