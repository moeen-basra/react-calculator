import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

import './ButtonPanel.css'

class ButtonPanel extends React.Component {
  handleClick = value => {
    this.props.clickHandler(value)
  }

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button value="3√" clickHandler={this.handleClick}>
            <i><sup style={{fontSize: '0.6em'}}>3</sup>√x</i>
          </Button>
          <Button value="AC" clickHandler={this.handleClick}>AC</Button>
          <Button value="+/-" clickHandler={this.handleClick}>+/-</Button>
          <Button value="%" clickHandler={this.handleClick}>%</Button>
          <Button value="/" clickHandler={this.handleClick} orange>÷</Button>
        </div>
        <div>
          <Button value="√" clickHandler={this.handleClick}>√x</Button>
          <Button value="7" clickHandler={this.handleClick}>7</Button>
          <Button value="8" clickHandler={this.handleClick}>8</Button>
          <Button value="9" clickHandler={this.handleClick}>9</Button>
          <Button value="*" clickHandler={this.handleClick} orange>x</Button>
        </div>
        <div>
          <Button value="xy" clickHandler={this.handleClick}>
            <i>x<sup><span style={{fontSize: '0.8em'}}>y</span></sup></i>
          </Button>
          <Button value="4" clickHandler={this.handleClick}>4</Button>
          <Button value="5" clickHandler={this.handleClick}>5</Button>
          <Button value="6" clickHandler={this.handleClick}>6</Button>
          <Button value="-" clickHandler={this.handleClick} orange>-</Button>
        </div>
        <div>
          <Button value="x!" clickHandler={this.handleClick}>x<small>!</small></Button>
          <Button value="1" clickHandler={this.handleClick}>1</Button>
          <Button value="2" clickHandler={this.handleClick}>2</Button>
          <Button value="3" clickHandler={this.handleClick}>3</Button>
          <Button value="+" clickHandler={this.handleClick} orange>+</Button>
        </div>
        <div>
          <Button value="0" clickHandler={this.handleClick} wide>0</Button>
          <Button value="." clickHandler={this.handleClick}>.</Button>
          <Button value="=" clickHandler={this.handleClick} orange>=</Button>
        </div>
      </div>
    )
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
}
export default ButtonPanel
