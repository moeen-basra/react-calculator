import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from '../app/layouts'
import Home from '../app/pages/home'
import Report from '../app/pages/report'
import NotFound from '../app/pages/error/Page'

export default function () {
  return <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/report" component={Report}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </Router>
}
