import React from 'react'
import {connect} from 'react-redux'

const IndexOutlines = (props) => {
  return (
    <div> hi there</div>
  )
}

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(IndexOutlines)
