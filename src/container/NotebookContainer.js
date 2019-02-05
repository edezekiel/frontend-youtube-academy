import React, { Component } from 'react'
import { connect } from 'react-redux'

import Notebook from '../presentational/Notebook'

class NotebookContainer extends Component {

  findNotebook = (props) => {
    return props.notebooks.filter(notebook => {
      return notebook.id === parseInt(props.match.params.id)
    })
  }

  render(){
    return (
      <Notebook notebook={this.findNotebook(this.props)} />
    )
  }
}

let mapStateToProps = ({notebooks}) => {
  return {notebooks}
}
export default connect(mapStateToProps)(NotebookContainer)
