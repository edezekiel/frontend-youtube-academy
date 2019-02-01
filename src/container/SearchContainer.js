import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'semantic-ui-react'

import CLIENT_ID from '../services/ClientId'
import API_KEY from '../services/Youtube'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class SearchContainer extends Component {

  // GoogleAuthContainer already signed user in
  // e.g., there is already a current user
  // BUT, still need to initClient on this page
  // otherwise, window.gapi will return undefined

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
      if (p && p.substr(-2, 2) == '[]') {
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
          if (pa == propArray.length - 1) {
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
      if (!params[p] || params[p] == 'undefined') {
        delete params[p];
      }
    }
    return params;
  }

  executeRequest = (request) => {
    request.execute(response => console.log(response));
  }

  //---------------------SEARCH_YOUTUBE---------------------//

  search = () => {
    // let request = window.gapi.client.youtube.channels.list({'part': 'snippet', 'mine': 'true'});
    // request.execute(res => console.log(res))
    this.buildApiRequest('GET',
                '/youtube/v3/search',
                {'maxResults': '25',
                 'part': 'snippet',
                 'q': 'surfing',
                 'type': ''});
  }

  render() {
    return(
      <Button onClick={() => this.search()}>Search Youtube</Button>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(SearchContainer)
