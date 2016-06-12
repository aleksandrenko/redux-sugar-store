import { createStore } from 'redux';
import getTypes from './utils/types';
import generateActions from './utils/actions';

/**
 * The store root reducer
 * @param {Object} state - Redux store state
 * @param {Object} action - Redux action
 * @returns {Object} state - The new Redux state
 */
const rootReducer = (state, action) => {
  let newState = state;

  rootReducer.reducers.forEach((reducer) => {
    const reducerName = Object.keys(reducer)[0];
    const reducerFunction = reducer[reducerName];

    // run the reducer for the called action.type
    if (reducerName === action.type) {
      newState = reducerFunction(newState, action);
    }
  });

  return newState;
};


/**
 * Default Redux store
 * @param {Object} initialState - the inital state of the store
 * @param {Array} reducers - an array of object used for reducers
 * @returns {Object} Redux store
 */
const rdxStore = (initialState = {}, reducers = []) => {
  rootReducer.reducers = reducers;

  // Create the Redux store with the root reducer and the initial state
  const store = createStore(rootReducer, initialState);

  // all names for actions and store methods
  const allTypes = getTypes(reducers);

  // create default actions for all type names
  const actions = generateActions(allTypes);

  // used as second param to connect function from redux-react
  store.mapStoreToProps = () => ({ store });

  // Add Action Methods directly to the store
  allTypes.forEach((type) => {
    store[type] = (payload) => {
      const reduxAction = actions[type](payload);

      store.dispatch(reduxAction);
    };
  });

  return store;
};

export default rdxStore;
