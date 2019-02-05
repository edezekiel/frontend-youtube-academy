import React from 'react'

import { Link } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'

const OutlineLink = (props) => {
  return (
      <List.Item>
        <Link to={"/" + props.outline.id}>
          <List.Header as='a'>{props.outline.videoTitle}</List.Header>
        </Link>
      </List.Item>
  )
}

export default OutlineLink
