import React from 'react'
import Http from '.././../../libs/Http'
import Page from './Page'

export default class Controller extends React.Component {
  state = {
    isLoading: false,
    data: [],
    pagination: {
      current_page: null,
      first_page_url: null,
      from: null,
      last_page: null,
      last_page_url: null,
      next_page_url: null,
      path: null,
      per_page: null,
      prev_page_url: null,
      to: null,
      total: null,
    },
    error: null
  }

  loadData = async (params) => {
    try {
      this.setState({ isLoading: true })

      let query = new URLSearchParams(params)

      const res = await Http.get({ path: `reports?${query}`})

      if (res) {
        this.setState({
          ...res,
          isLoading: false,
        })
      }
    } catch (err) {
      console.log(err)
      this.setState({ isLoading: false, error: err.error })
    }
  }

  render() {
    return <Page {...this.state} loadData={this.loadData}/>
  }
}
