import React from 'react'

import { Link } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'

const OutlineLink = (props) => {
  return (
    <Link to={"/" + props.outline.id}>
      <List.Item>
        <List.Header>{props.outline.videoTitle}</List.Header>
      </List.Item>
    </Link>
  )
}

export default OutlineLink
