import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'

try {
  window.Popper = require('popper.js').default
  window.$ = window.jQuery = require('jquery')

  require('bootstrap')
} catch (e) {
}
