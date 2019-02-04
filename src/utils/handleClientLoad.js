import initClient from './initClient'

let handleClientLoad = () => {
  return (
    window.gapi.load('client:auth2', initClient)
  )}

export default handleClientLoad;
