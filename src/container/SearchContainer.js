import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'

import SearchForm from '../presentational/SearchForm'
import SearchResult from '../presentational/SearchResult'

import { addSearchResult } from '../actions/addSearchResult'
import { clearSearchResults } from '../actions/clearSearchResults'

import CLIENT_ID from '../services/ClientId'
import API_KEY from '../services/Youtube'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class SearchContainer extends Component {

  // GoogleAuthContainer already signed user (current user)
  // but,still need to initClient so that window.gapi is defined

  //---------------------INIT_CLIENT---------------------//

  componentDidMount(){
    this.handleClientLoad()
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient)
  }

  initClient = () => {
    window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
  }

  //---------------------BOILERPLATE---------------------//

  buildApiRequest = (requestMethod, path, params, properties) => {
    params = this.removeEmptyParams(params);
    let request;
    if (properties) {
      let resource = this.createResource(properties);
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

  createResource = (properties) => {
    let resource = {};
    let normalizedProps = properties;
    for (let p in properties) {
      let value = properties[p];
      if (p && p.substr(-2, 2) === '[]') {
        let adjustedName = p.replace('[]', '');
        if (value) {
          normalizedProps[adjustedName] = value.split(',');
        }
        delete normalizedProps[p];
      }
    }
    for (let p in normalizedProps) {
      // Leave properties that don't have values out of inserted resource.
      if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
        let propArray = p.split('.');
        let ref = resource;
        for (let pa = 0; pa < propArray.length; pa++) {
          let key = propArray[pa];
          if (pa === propArray.length - 1) {
            ref[key] = normalizedProps[p];
          } else {
            ref = ref[key] = ref[key] || {};
          }
        }
      };
    }
    return resource;
  }

  removeEmptyParams = (params) => {
    for (let p in params) {
      if (!params[p] || params[p] === 'undefined') {
        delete params[p];
      }
    }
    return params;
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
    response.items.map(video => {
      this.props.dispatch(clearSearchResults())
      if (video.id.videoId) {this.props.dispatch(addSearchResult(video.id.videoId))}
    })
  }

  //---------------------SAVE_OUTLINE---------------------//

  // fetchUser = (outline) => {
  //   return fetch(`${RAILS_API}/outlines`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       video: ,
  //       notes: ,
  //     })
  //   })
  //   .then(res => res.json())
  // }

  submitOutline = (event) => {
    event.preventDefault()
      let videoNotes = event.target.videoNotes.value
      console.log(videoNotes)
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
