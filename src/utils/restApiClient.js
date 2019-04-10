import axios from 'axios';

class RestApiClient {
  constructor(config) {
    this.client = axios.create(config);
  }

  request(options) {
    return this.client.request(options);
  }
}

const restApiClient = () => (new RestApiClient());

export default restApiClient;
