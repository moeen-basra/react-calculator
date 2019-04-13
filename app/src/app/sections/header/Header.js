import React from 'react'
import {Link} from 'react-router-dom'

export default function () {
  return <nav className="site-header sticky-top py-1">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <Link to={'/'}>CalcuCo</Link>
      <Link to={'/report'} className="py-2 d-none d-md-inline-block">Report</Link>
    </div>
  </nav>
}
