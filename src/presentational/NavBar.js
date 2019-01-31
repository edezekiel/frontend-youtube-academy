import React from 'react'
import { connect } from 'react-redux'

import { Menu, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../assets/favicon.png'

const NavBar = (props) =>  {
  return (
    <Menu>
      <Link to="/" className="item"><Header as='h3'><Image src={logo} alt="logo"/> Youtube Academy</Header></Link>
      <Link to="/search" className="item"><Header as='h3'>Search</Header></Link>
      { props.user ?
        <Link to="/" className="item">
          <Header as='h3'>Logout</Header>
        </Link>
      :
      <Link to="/login" className='item'>
        <Header as='h3'>Login</Header>
      </Link>
    }
    </Menu>
  )
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(NavBar)
