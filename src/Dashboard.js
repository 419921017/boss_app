import React from 'react'
import App from './App'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'

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

@connect(
  state => state.auth,
  {logout}
)

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const redirectToLogin = <Redirect to="/login"></Redirect>
    const app = (
      <div>
        <h2>Dashboard</h2>
        { this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null }
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
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard
