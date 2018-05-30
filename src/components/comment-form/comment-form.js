import React, { Component } from 'react'

export default class CommentForm extends Component {
  render() {
    return (
      <form>
        <div>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <input type="text" placeholder="text" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    )
  }
}
