import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'

import SearchForm from '../presentational/SearchForm'
import SearchResult from '../presentational/SearchResult'

import { addSearchResult } from '../actions/addSearchResult'
import { clearSearchResults } from '../actions/clearSearchResults'
import handleClientLoad from '../utils/handleClientLoad'

import RAILS_API from '../services/Backend'

class SearchContainer extends Component {

  // GoogleAuthContainer already signed user (current user)
  // but,still need to initClient so that window.gapi is defined

  componentDidMount(){
    handleClientLoad()
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
    this.props.dispatch(clearSearchResults())
    response.items.filter(video => video.id.kind === "youtube#video")
    .map(video => {
      this.props.dispatch(addSearchResult(video.id.videoId))
      return video
    })
  }

  //---------------------SAVE_OUTLINE---------------------//

  fetchOutline = (outline) => {
    return fetch(`${RAILS_API}/outlines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        video: outline.video,
        notes: outline.notes,
        googleID: this.props.user.El,
      })
    })
    .then(res => res.json())
  }

  submitOutline = (event, video) => {
    event.preventDefault()
    let outline = {
      video: `https://www.youtube.com/watch?v=${video}`,
      notes: event.target.videoNotes.value,
    }
    this.fetchOutline(outline)
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
