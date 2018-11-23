import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onChangeReviewText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    this.props.addReview({
      ...this.state,
      restaurantId: this.props.restaurantId
    })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm} >
          <input type="text" placeholder="Write Review..." value={this.state.text} onChange={this.onChangeReviewText} />
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
