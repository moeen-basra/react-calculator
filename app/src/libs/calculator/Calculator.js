import { isNumber } from '../helpers'
import Logger from '../logger/Logger'
import Operator from './Operator'

function operate(x, y, operator) {
  x = Number(x)
  y = Number(y)

  const calculation = new Operator(x, y, operator)

  if (calculation.result) {
    log(calculation)
    return calculation.result.toString()
  }

  return null
}

function log(data) {
  new Logger(data)
}

export default function calculate(obj, button) {
  if (button === 'AC') {
    return {
      total: null,
      next: null,
      operator: null,
    }
  }

  if (isNumber(button)) {
    if (button === '0' && obj.next === '0') {
      return {}
    }
    // If there is an operator, update next
    if (obj.operator) {
      if (obj.next) {
        return { next: obj.next + button }
      }
      return { next: button }
    }
    // If there is no operator, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + button,
        total: null,
      }
    }
    return {
      next: button,
      total: null,
    }
  }

  if (button === '.') {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes('.')) {
        return {}
      }
      return { next: obj.next + '.' }
    }
    return { next: '0.' }
  }

  if (button === '=') {
    if (obj.next && obj.operator) {
      return {
        total: operate(obj.total, obj.next, obj.operator),
        next: null,
        operator: null,
      }
    } else {
      // '=' with no operator, nothing to do
      return {}
    }
  }

  if (button === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() }
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() }
    }
    return {}
  }

  if (button === 'xy') {
    if (obj.next && obj.total && obj.operator) {
      const result = operate(obj.total, obj.next, obj.operator)

      return {
        total: result,
        next: null,
        operator: null,
      }
    }

    if (obj.next && !obj.operator) {
      return {
        total: obj.next,
        next: null,
        operator: button,
      }
    }

    return {}
  }

  if (button === '%' || button === '3√' || button === '√' || button === 'x!') {
    if (obj.next) {
      return {
        next: null,
        operator: null,
        total: operate(obj.next, 0, button),
      }
    }
    return {}
  }

  // User pressed an operator button and there is an existing operator
  if (obj.operator) {
    return {
      total: operate(obj.total, obj.next, obj.operator),
      next: null,
      operator: button,
    }
  }

  // The user hasn't typed a number yet, just save the operator
  if (!obj.next) {
    return { operator: button }
  }

  // save the operator and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operator: button,
  }
}
