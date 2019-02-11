import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { Menu, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from './assets/favicon.png'

const NavBar = (props) =>  {
  return (
    <Menu stackable>
      <Link to="/" className="item">
        <Header as='h3'><Image src={logo} alt="logo"/> YouTube Academy</Header>
      </Link>

      { props.user ?
        <Fragment>

          <Link to="/profile" className="item">
            <Header as='h3'>Profile</Header>
          </Link>

          <Link to="/community" className="item">
            <Header as='h3'>Community</Header>
          </Link>

          <Link to="/logout" className="item">
            <Header as='h3'>Logout</Header>
          </Link>
        </Fragment>
        : null
      }
    </Menu>
  )
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(NavBar)
