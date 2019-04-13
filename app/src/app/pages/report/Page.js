import _head from 'lodash/head'
import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Errors from './components/Errors'

export default class Page extends React.Component {
  state = {
    formData: {
      interval: null,
      operator: null,
    },
    error: null,
  }

  handleChange = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    this.props.loadData(this.state.formData)
  }

  render() {
    return <div style={{ minHeight: '80vh' }}>
      <Header {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      {this.props.error && <Errors error={this.props.error}/> }
      <Content {...this.props}/>
    </div>
  }
}
