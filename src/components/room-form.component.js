import React, { Component } from 'react'

class RoomForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }
  }
  render () {
    return (
      <form className='ui fluid action input' onSubmit={event => this.handleSubmit(event)}>
        <input id='reply-box' type='text' autoComplete='off' placeholder='Reply...' value={this.state.message} onChange={event => this.onInputChange(event.target.value)} />
        <button action='submit' className='ui button primary'>
          <i className='send icon'></i>
        </button>
      </form>
    )
  }
  onInputChange (inputText) {
    this.setState({message: inputText})
  }
  handleSubmit (event) {
    event.preventDefault()
    if (this.state.message === '') {
      return
    }
    const message = {
      user: 'keawade',
      content: this.state.message.trim()
    }
    this.props.socket.emit('message', message)
    this.setState({message: ''})
  }
}

export default RoomForm
