import React from 'react'
import operators from '../operators'

export default function Header({ interval, operator, handleSubmit, handleChange }) {
  return <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
    <form className="form-inline" onSubmit={(evt) => handleSubmit(evt)}>
      <div className="form-row align-items-center">
        <div className="col-auto">
          <label className="sr-only" htmlFor="interval">Interval</label>
          <select id="interval" className="custom-select mr-sm-2"
                  name="interval"
                  onChange={(evt) => handleChange(evt.target.name, evt.target.value)}>
            <option value="">-- Select --</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="col-auto">
          <label className="sr-only" htmlFor="operator">Operator</label>
          <select id="operator" className="custom-select mr-sm-2"
                  name="operator"
                  onChange={(evt) => handleChange(evt.target.name, evt.target.value)}>
            <option value="">-- Select --</option>
            {operators.map((operator, key) => {
              return <option key={key} value={operator.value}>{operator.label}</option>
            })}
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </div>
      </div>
    </form>
  </div>
}
