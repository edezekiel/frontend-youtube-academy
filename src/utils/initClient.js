import CLIENT_ID from '../services/ClientId'
import API_KEY from '../services/Youtube'
const DISCOVERY_DOCS = "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

let initClient = () => {
  return (
    window.gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  })
  )
}

export default initClient;
