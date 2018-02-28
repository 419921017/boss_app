import React from 'react'
import App from './App'
import { Link, Route } from 'react-router-dom'


function Second() {
  return (
    <h2>Second</h2>
  )
}
function Third() {
  return (
    <h2>Third</h2>
  )
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/dashboard/">fisrt</Link>
          </li>
          <li>
            <Link to="/dashboard/Second">Second</Link>
          </li>
          <li>
            <Link to="/dashboard/Third">Third</Link>
          </li>
        </ul>
        <Route path="/dashboard/" exact component={App}></Route>
        <Route path="/dashboard/Second" component={Second}></Route>
        <Route path="/dashboard/Third" component={Third}></Route>
      </div>
    )
  }
}

export default Dashboard
