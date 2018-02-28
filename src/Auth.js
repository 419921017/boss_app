import React from 'react'
import { login } from './Auth.redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.auth,
  {login}
)
class Auth extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Auth</h2>
        { this.props.isAuth ? <Redirect to="/dashboard"/> : null }
        <div>Validate failed</div>
        <button type="default" onClick={this.props.login}>login</button>
        
      </div>
    )
  }
}

export default Auth