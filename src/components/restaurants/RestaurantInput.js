import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onChangeRestaurantText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm} >
          <input type="text" placeholder="Restaurant Name" value={this.state.text} onChange={this.onChangeRestaurantText} />
          <button>Add Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
