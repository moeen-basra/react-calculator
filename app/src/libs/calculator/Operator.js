export default class Operator {
  operand1
  operand2
  operator
  result

  constructor(operand1, operand2, operator) {
    this.operand1 = operand1
    this.operand2 = operand2
    this.operator = operator

    this.init()
  }

  init() {
    switch (this.operator) {
      case '+':
        this.add()
        break
      case '-':
        this.sub()
        break
      case '*':
        this.multi()
        break
      case '/':
        this.div()
        break
      case '%':
        this.per()
        break
      case '√':
        this.sqrt()
        break
      case '3√':
        this.curt()
        break
      case 'xy':
        this.pow()
        break
      case 'x!':
        this.fact()
        break
      default:
        alert('Invalid operator')
        break
    }
  }

  add() {
    this.result = this.operand1 + this.operand2
  }

  sub() {
    this.result = this.operand1 - this.operand2
  }

  multi() {
    this.result = this.operand1 * this.operand2
  }

  div() {
    if (this.operand2 === 0) {
      alert('division by zero not allowed')
    } else {
      this.result = this.operand1 / this.operand2
    }
  }

  per() {
    this.result = this.operand1 / 100
  }

  sqrt() {
    this.result = Math.sqrt(this.operand1)
  }

  curt() {
    this.result = Math.pow(this.operand1, 1 / 3)
  }

  pow() {
    this.result = Math.pow(this.operand1, this.operand2)
  }

  fact() {
    const max = 100
    if (this.operand1 > max) {
      alert(`number greater than ${max} is not allowed so returning factorial of ${max}`)
      this.result = factorial(max)
    } else {
      this.result = factorial(this.operand1)
    }
  }
}

function factorial(n) {
  if (n <= 1) {
    return 1
  }

  return n * factorial(n - 1)
}
