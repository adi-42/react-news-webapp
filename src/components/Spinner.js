import React, { Component } from 'react'
import loading from './spinnergif.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='my-3 text-center'>
            <img src={loading} alt="loading"></img>
      </div>
    )
  }
}
