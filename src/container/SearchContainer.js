import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router'

import { addSearchResult, clearSearchResults } from '../redux/actions'
import handleClientLoad from '../utils/handleClientLoad'
import dispatchUserOutlines from '../utils/dispatchUserOutlines'
import fetchOutline from '../utils/fetchOutline'
import buildApiRequest from '../utils/buildApiRequest'

import SearchForm from '../presentational/SearchForm'
import CreateOutlineForm from '../presentational/CreateOutlineForm'

class SearchContainer extends Component {

  // need to initClient again so that window.gapi is defined
  componentDidMount(){
    handleClientLoad()
  }

  //---------------------SEARCH_YOUTUBE---------------------//

  search = (event) => {
    event.preventDefault()
    let searchTerm = event.target.searchTerm.value
    let request = buildApiRequest(
      'GET',
      '/youtube/v3/search',
      {'maxResults': '10',
       'part': 'snippet',
       'q': `${searchTerm}`,
       'type': ''}
    );
    request.execute(response => this.renderVideos(response))
  }

  renderVideos = (response) => {
    this.props.dispatch(clearSearchResults())
    response.items.filter(video => video.id.kind === "youtube#video")
    .map(video => {
      this.props.dispatch(addSearchResult(video))
      return video
    })
  }

  //---------------------SAVE_OUTLINE---------------------//

  submitOutline = (event, videoId, videoTitle, user) => {
    event.preventDefault()
    let outline = {
      videoId: `https://www.youtube.com/watch?v=${videoId}`,
      videoTitle: videoTitle,
      notes: event.target.videoNotes.value,
    }
    fetchOutline(outline, user)
    .then(response => this.redirectToOutline(response.id))
  }

  // dispatchUserOutlines contains a fetch,
  // so page redirect must wait until dispatch is complete

  redirectToOutline = (id) => {
    dispatchUserOutlines(this.props)
    .then(response => this.props.history.push(`/outlines/${id}`))
  }

  //---------------------RENDER/REDUX---------------------//

  render() {
      return(
        <Container>
          <SearchForm search={this.search} />
          {this.props.search.map((video, i) =>
          <CreateOutlineForm
            videoId={video.videoId}
            videoTitle={video.videoTitle}
            user={this.props.user}
            key={i}
            submitOutline={this.submitOutline}/>
          )}
        </Container>
      )
    }
  }

let mapStateToProps = ({user, search }) => {
  return {user, search }
}

export default withRouter(connect(mapStateToProps)(SearchContainer))
