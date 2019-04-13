import React from 'react'
import Container from '../../components/calculator'

export default function () {
  return <div style={{minHeight: '80vh'}}>
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">Calculator</h1>
        <p className="lead font-weight-normal">Lumen React Calculator is free and open source project created by Moeen Farooq just for learning purpose.</p>
      </div>
    </div>

    <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <Container/>
      </div>
    </div>
  </div>
}
