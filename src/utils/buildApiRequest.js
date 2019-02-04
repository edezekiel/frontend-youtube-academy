import removeEmptyParams from '../utils/removeEmptyParams'
import createResource from '../utils/createResource'

let buildApiRequest = (requestMethod, path, params, properties) => {
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
    return request
  } else {
    request = window.gapi.client.request({
        'method': requestMethod,
        'path': path,
        'params': params
    });
    return request
  }
}

export default buildApiRequest
