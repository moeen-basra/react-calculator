import ExtendableError from './Error'

export default class Exception extends ExtendableError {
  name = 'Exception'
  message
  statusText
  status
  error

  constructor(message, status, statusText, error) {
    super(message)

    this.name = this.constructor.name
    this.status = status || 400
    this.statusText = statusText
    this.error = error || message
  }
}
