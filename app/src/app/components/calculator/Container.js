import React from 'react'
import Calculator from '../../../libs/calculator'
import ButtonPanel from './components/ButtonPanel'
import Display from './components/Display'
import './Contianer.css'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operator: null,
    }
  }

  handleClick = async (value) => {
    const result = new Calculator(this.state, value)

    this.setState(result)
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || '0'}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}
