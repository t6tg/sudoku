import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <div
        onClick={e => {
          if (this.props.isInitial) {
            return;
          }
          this.props.onChange((this.props.num + 1) % 5);
        }}
        className={`cell ${this.props.isInitial ? 'initial' : ''}`}
      >
        {this.props.num !== 0 && this.props.num}
      </div>
    );
  }
}

export default Cell;
