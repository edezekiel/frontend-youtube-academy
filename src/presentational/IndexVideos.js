import React from 'react'
import {connect} from 'react-redux'

const IndexVideos = (props) => {
  console.log(props.user)
  return (
    <div> hi there</div>
  )
}

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(IndexVideos)
