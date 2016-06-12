const NOT_ALLOWED_TYPES = [
  'dispatch',
  'getstate',
  'replaceReducer',
  'subscribe',
  'symbol',
  'mapStoreToProps',
  'reducers'
];


/**
 * Get all types
 * @param {Array} reducers - an array with all reducers
 * @returns {Array} types - an array with the names of all redusers
 */
const getTypes = (reducers) => reducers.reduce((acc, reducer) => {
  const type = Object.keys(reducer)[0];
  const NOT_EXISTING_INDEX = -1;

  if (NOT_ALLOWED_TYPES.indexOf(type.toLowerCase()) !== NOT_EXISTING_INDEX) {
    throw Error(`rdxStore can not accept reducer named "${type}".`);
  }

  acc.push(type);

  return acc;
}, []);


/**
 * generateActions
 * @param {Array} types - An array with all reducers
 * @returns {Object} Actions
 */
const generateActions = (types) => types.reduce((actions, type) => {
  actions[type] = (payload) => ({
    type,
    payload
  });

  return actions;
}, {});


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
 * A store creater
 * @param {function} createStore - redux function
 * @param {Object} initialState - the store initial data
 * @param {Array} reducers - array of functions/reducers
 * @returns {Object} store - Redux store
 */
const storeCreator = (createStore, initialState = {}, reducers = []) => {
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

export default storeCreator;
