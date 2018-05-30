import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'

class CommentForm extends Component {
  state = {
    name: '',
    text: ''
  }

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            placeholder={this.props.name}
            onChange={this.changeField('name')}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={this.props.text}
            onChange={this.changeField('text')}
          />
        </div>
        <div>
          <input type="submit" onClick={this.submitForm} />
        </div>
      </form>
    )
  }

  changeField = (type) => (e) => {
    const { value } = e.target
    this.setState({
      [type]: value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addComment(this.state)

    this.setState({
      name: '',
      text: ''
    })
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm)
