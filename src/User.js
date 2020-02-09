import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
        <br />
        User ID : {this.props.match.params.id} <br />
        <button
          onClick={e => {
            this.props.history.goBack();
          }}
        >
          Go Back
        </button>
      </div>
    );
  }
}
