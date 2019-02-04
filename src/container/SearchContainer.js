import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'

import SearchForm from '../presentational/SearchForm'
import SearchResult from '../presentational/SearchResult'

import { addSearchResult } from '../actions/addSearchResult'
import { clearSearchResults } from '../actions/clearSearchResults'
import handleClientLoad from '../utils/handleClientLoad'
import removeEmptyParams from '../utils/removeEmptyParams'
import createResource from '../utils/createResource'
import fetchOutline from '../utils/fetchOutline'

import RAILS_API from '../services/Backend'

class SearchContainer extends Component {

  // GoogleAuthContainer already signed user (current user)
  // but,still need to initClient so that window.gapi is defined

  componentDidMount(){
    handleClientLoad()
  }

  //---------------------BOILERPLATE---------------------//

  buildApiRequest = (requestMethod, path, params, properties) => {
    params = removeEmptyParams(params);
    let request;
    if (properties) {
      let resource = createResource(properties);
      request = window.gapi.client.request({
          'body': resource,
          'method': requestMethod,
          'path': path,
          'params': params
      });
    } else {
      request = window.gapi.client.request({
          'method': requestMethod,
          'path': path,
          'params': params
      });
    }
    this.executeRequest(request);
  }

  executeRequest = (request) => {
    request.execute(response => this.renderVideos(response));
  }

  //---------------------SEARCH_YOUTUBE---------------------//

  search = (event) => {
    event.preventDefault()
    let searchTerm = event.target.searchTerm.value
    this.buildApiRequest(
      'GET',
      '/youtube/v3/search',
      {'maxResults': '10',
       'part': 'snippet',
       'q': `${searchTerm}`,
       'type': ''}
    );
  }

  renderVideos = (response) => {
    this.props.dispatch(clearSearchResults())
    response.items.filter(video => video.id.kind === "youtube#video")
    .map(video => {
      this.props.dispatch(addSearchResult(video.id.videoId))
      return video
    })
  }

  //---------------------SAVE_OUTLINE---------------------//

  submitOutline = (event, video) => {
    event.preventDefault()
    let outline = {
      video: `https://www.youtube.com/watch?v=${video}`,
      notes: event.target.videoNotes.value,
    }
    fetchOutline(outline, this.props)
  }

  //---------------------SEARCH_FORM---------------------//

  render() {
      return(
        <Container>
          <SearchForm search={this.search} />
          {this.props.search.map((result, i) =>
            <SearchResult
              result={result}
              key={i}
              submitOutline={this.submitOutline}
            />
          )}
        </Container>
      )
    }
  }

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(SearchContainer)
