import sugarStore from '../../../';
import { createStore } from 'redux';

const store = sugarStore(createStore, { counter: 0, status: 'normal' }, [
  {
    incrementCounter: (state, action) => {
      console.log('%cReducer: incrementCounter (green reducer)', 'color: green;');

      return {
        counter: (state.counter + 1),
        status: 'normal'
      };
    }
  }, {
    incrementCounter: (state, action) => {
      console.log('%cReducer: incrementCounter (blue reducer)', 'color: blue;');

      return state;
    }
  }, {
    setCounter: (state, action) => {
      console.log('%cReducer: setCounter', 'color: purple;');

      return {
        counter: action.payload,
        status: 'normal'
      }
    }
  },
  {
    delayedIncrementCounter: (state, action) => {
      console.log('%cReducer: delayedIncrementCounter', 'color: red;');

      if (action.payload.done) {
        return {
          counter: (state.counter + 1),
          status: 'normal'
        };
      } else {
        setTimeout(function() {
          store.delayedIncrementCounter({ done: true });
        }, 1000);
      }

      return {
        counter: state.counter,
        status: 'in progress'
      }
    }
  }
]);

export default store;
