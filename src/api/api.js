import { makeRequest } from './api-utils'

function makeApi(request = makeRequest()) {
  function getProducts() {
    return request({
      url: '/products',
      requestMethod: 'GET',
    })
  }
  function getCheckoutCart() {
    return request({
      url: '/checkout',
      requestMethod: 'GET',
    })
  }
  return {
    getProducts: getProducts,
    getCheckoutCart: getCheckoutCart
  }
}

export default makeApi()