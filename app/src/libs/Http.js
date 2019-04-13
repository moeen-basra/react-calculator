import { isString } from './helpers'
import Exception from '../exceptions/Exception'

const defaultConfig = {
  mode: 'cors',
  redirect: 'follow',
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
}

export default class Fetcher {
  static baseUrl = process.env.REACT_APP_API_URL

  static config = defaultConfig

  static resetConfig() {
    Fetcher.config = defaultConfig
  }

  static request(params) {
    return Fetcher.callApi(prepareRequest('REQUEST', params))
  }

  static head(params) {
    return Fetcher.callApi(prepareRequest('HEAD', params))
  }

  static get(params) {
    return Fetcher.callApi(prepareRequest('GET', params))
  }

  static delete(params) {
    return Fetcher.callApi(prepareRequest('DELETE', params))
  }

  static post(params) {
    return Fetcher.callApi(prepareRequest('POST', params))
  }

  static put(params) {
    return Fetcher.callApi(prepareRequest('PUT', params))
  }

  static patch(params) {
    return Fetcher.callApi(prepareRequest('PATCH', params))
  }

  static callApi(request) {
    return fetch(request)
      .then(responseInterceptor)
      .catch(err => {
        if (err instanceof Exception) {
          return Promise.reject(err)
        }

        console.log(`Fetcher Class Error => `, err)
      })
  }
}

function prepareRequest(method, params) {
  try {
    const { path, data: body } = params
    const url = Fetcher.baseUrl ? new URL(path, Fetcher.baseUrl) : new URL(path)
    const config = { ...Fetcher.config, method }

    if (body) {
      if (body instanceof FormData) {
        if (config.headers.has('Content-Type')) {
          config.headers.delete('Content-Type')
        }
        config.body = body
      } else {
        if (!config.headers.has('Content-Type')) {
          config.headers.set('Content-Type', 'application/json')
        }

        config.body = JSON.stringify(body)
      }
    }

    return new Request(url.toString(), config)
  } catch (err) {
    console.log('Failed making request in fetcher')
    console.log(JSON.stringify(err))
    throw err
  }
}

function responseInterceptor(response) {
  if (response.headers.get('Content-Type') === 'application/json') {
    return response.json().then(json => {
      if (response.ok) {
        return json.data
      }

      const { status, statusText } = response
      let error
      let message
      // temporary hack fix json encoded errors coming from server
      if (json && json.error && json.error.message) {
        try {
          error = JSON.parse(json.error.message)
        } catch (e) {
          error = json.error.message
        }
      }

      if (!error) {
        error = statusText
      }

      if (isString(error)) {
        message = error
      } else {
        message = statusText
      }

      throw new Exception(message, status, statusText, error)
    })
  }

  return response.blob()
    .then(blob => {
      if (response.ok) {
        return blob
      }

      console.log('unhandled error')
    })
}
