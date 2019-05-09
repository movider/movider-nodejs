const axios = require('axios');
const pkg = require("./package.json");

class HTTPClient {
  constructor(baseURL, defaultHeaders) {
    this.instance = axios.create({
      baseURL,
      headers: Object.assign({}, defaultHeaders, {
        "User-Agent": `${pkg.name}/${pkg.version}`,
      }),
    });
  }

  post(url, data) {
    return this.instance.post(url, data).then(res => res.data).catch(error => error.response.data.error);
  }
}

module.exports = HTTPClient;