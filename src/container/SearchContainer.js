import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import { addSearchResult, clearSearchResults } from '../redux/actions'
import handleClientLoad from '../utils/handleClientLoad'
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

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(SearchContainer)
