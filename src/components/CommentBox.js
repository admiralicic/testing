import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment</h4>
        <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment}
        ></textarea>
        <div>
          <button type='submit'>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
