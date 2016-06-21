import React from 'react';

const Component = React.createClass({
  propTypes: {
    counter: React.PropTypes.number,
    status: React.PropTypes.string
  },
  buttonClickHandler() {
    this.props.store.incrementCounter();
  },
  buttonSetClickHandler() {
    this.props.store.setCounter(10);
  },
  buttonDelayedSetClickHandler() {
    this.props.store.delayedIncrementCounter(10);
  },
  render() {
    return (
        <section>
          <h1>Home page</h1>
          <div>Counter: <b>{ this.props.counter }</b></div>
          <div>Action in progress: <b>{ this.props.status }</b></div>
          <div><button onClick={ this.buttonClickHandler }>Increment counter</button></div>
          <div><button onClick={ this.buttonSetClickHandler }>Set counter to 10</button></div>
          <div><button onClick={ this.buttonDelayedSetClickHandler }>Increment counter (Delayed)</button></div>
        </section>
    );
  }
});

export default Component;