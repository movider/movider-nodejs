const HTTPClient = require('./http');
const querystring = require('querystring');

class Client {
    constructor(config) {
        if (!config.api_key || !config.api_secret) {
          throw new Error("no apiKey");
        }

        this.config = config;
        this.http = new HTTPClient(process.env.API_BASE_URL || "https://movider-api-gateway.1mobyline.com", {'content-type': 'application/x-www-form-urlencoded'});
    }

    sendMessage(params){
        return this.http.post("/v1/sms", querystring.stringify(Object.assign(params, this.config))).then(parseResponse);
    }

    requestOtp(params) {
        return this.http.post("/v1/verify", querystring.stringify(Object.assign(params, this.config))).then(parseResponse);
    }

    verifyOtp(params) {
        return this.http.post("/v1/acknowledge", querystring.stringify(Object.assign(params, this.config))).then(parseResponse);
    }

}

function parseResponse (response) {
    if(response.code) {

        return {
            "success": false,
            "error": response.name,
            "error_description": response.description
        }
    }

    return {
        "success": true,
        "data": response
    }
}

module.exports = Client;