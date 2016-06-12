import sugarStore from '../../../';
import { createStore } from 'redux';

const store = sugarStore(createStore, { counter: 0 }, [
  {
    incrementCounter: (state, action) => {
      console.log('%cReducer: incrementCounter (green reducer)', 'color: green;');

      return {
        counter: (state.counter + 1)
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
        counter: action.payload
      }
    }
  }
]);

export default store;
