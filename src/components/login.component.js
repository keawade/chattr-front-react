import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this. state = {
      user: '',
      password: ''
    }
  }

  login(event) {
    event.preventDefault()

    Auth.login(this.state.user, this.state.password).catch(function(err) {
      console.log('Error logging in', err)
    })
  }

  render() {
    return (
      <form className='ui form'>
        <div className='field'>
          <label>First Name</label>
          <input type='text' name='username' placeholder='Username' />
        </div>
        <div className='field'>
          <label>Last Name</label>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <button className='ui button' type='submit'>Submit</button>
      </form>
    )
  }
}

export default Login
