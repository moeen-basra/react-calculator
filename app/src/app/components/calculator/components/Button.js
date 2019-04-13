import PropTypes from 'prop-types'
import React from 'react'
import './Button.css'

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.value)
  }

  render() {
    const className = [
      'component-button',
      this.props.orange ? 'orange' : '',
      this.props.wide ? 'wide' : '',
    ]

    return (
      <div className={className.join(' ').trim()}>
        <button onClick={this.handleClick}>{this.props.children}</button>
      </div>
    )
  }
}

Button.propTypes = {
  children: PropTypes.any,
  value: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
}
export default Button
