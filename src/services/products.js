import restApiClient from '../utils/restApiClient'

export default () => {
  const client = restApiClient()
  return {
    getProduct: (id = '') => client.request({
      method: 'GET',
      url: '/product/' + id
    })
  };
};