let removeEmptyParams = (params) => {
  for (let p in params) {
    if (!params[p] || params[p] === 'undefined') {
      delete params[p];
    }
  }
  return params;
}

export default removeEmptyParams
