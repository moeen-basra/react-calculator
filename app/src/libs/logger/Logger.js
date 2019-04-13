import axios from 'axios'

export default class Logger {

  data

  constructor(props) {
    this.data = props

    this.init()
  }

  init() {
    const baseUrl = process.env.REACT_APP_API_URL

    const url = baseUrl + 'calculate'

    axios.post(url, this.data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

}
