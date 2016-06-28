import React, { Component } from 'react'
import AuthService from '../utils/AuthService'

class About extends Component {
  render() {
    const { auth } = this.props
    console.log(this.props)
    return (
      <div className=''>
        <h2 className='ui header'>Login</h2>
        <button className='ui button primary' onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default About
