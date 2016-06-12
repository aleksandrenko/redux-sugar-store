import React from 'react';

const Component = React.createClass({
  propTypes: {
    counter: React.PropTypes.number
  },
  buttonClickHandler() {
    this.props.store.incrementCounter();
  },
  buttonSetClickHandler() {
    this.props.store.setCounter(10);
  },
  render() {
    return (
        <section>
          <h1>Home page</h1>
          <div>Counter: <b>{ this.props.counter }</b></div>
          <div><button onClick={ this.buttonClickHandler }>Increment counter</button></div>
          <div><button onClick={ this.buttonSetClickHandler }>Set counter to 10</button></div>
        </section>
    );
  }
});

export default Component;