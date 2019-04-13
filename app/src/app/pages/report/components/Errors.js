import _head from 'lodash/head'
import React from 'react'

function parseErrors(error) {
  const errors = []

  for (let err in error) {
    if (!error.hasOwnProperty(err)) {
      continue
    }
    errors.push(_head(error[err]))
  }
  return errors
}

export default function ({ error }) {
  const errors = parseErrors(error)
  return <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
    <div className="alert alert-danger">
      {errors.map((err, i) => (<div key={i}>{err}</div>))}
    </div>
  </div>
}
