[![Build Status](https://travis-ci.org/aleksandrenko/redux-sugar-store.svg?branch=master)](https://travis-ci.org/aleksandrenko/redux-sugar-store) [![GitHub issues](https://img.shields.io/github/issues/aleksandrenko/redux-sugar-store.svg)](https://github.com/aleksandrenko/redux-sugar-store/issues) [![GitHub version](https://badge.fury.io/gh/aleksandrenko%2Fredux-sugar-store.svg)](https://badge.fury.io/gh/aleksandrenko%2Fredux-sugar-store)

# redux-sugar-store
Redux store sprinkled with some sugar.
The "redux-sugar-store" will get all reducers and create a standart actions ({type ..., payload ...}) with the same name.
It will create methods in the store so actions can be dispatched directly like plain functions.

(depending on redux)

#### Sample usage:
``` html
import sugarStore from 'redux-sugar-store';
import { createStore } from 'redux';

const initialState = {};
const reducers = [
      {
        exampleReducer: (state, action) => state
      }, {
        exampleReducer: (state, action) => state
      }, {
        anotherReducer: (state, action) => state
      }
    ];

const store = sugarStore(createStore, initialState, reducers);
export default store;
```

#### Dispatching events

``` html
store.exampleReducer(payload);
```

### Using connect
mapStoreToProps - will get a store reference in the ListConnected component. So store.exampleReducer(payload); can be called in the component as it can be called outside.

``` html
const ListConnected = connect((store) => ({
  user: store.users
}), store.mapStoreToProps)(List);
```


# Redux Vanila

###### file: "actions.js"
``` html
/*
 * action types
 */
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
export const ANOTHER_ACTION = 'ANOTHER_ACTION';

/*
 * action creators
 */
export function exampleAction(payload) {
  return { type: EXAMPLE_ACTION, payload }
}

export function anotherAction(payload) {
  return { type: ANOTHER_ACTION, payload }
}
```



###### file: "reducers.js"

``` html
import { EXAMPLE_ACTION, ANOTHER_ACTION } from './actions';

/*
 * reducers
 */
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state
    case ANOTHER_ACTION:
      return state
    default:
      return state
  }
}

export default rootReducer;
```

###### file: "store.js"

``` html
import rootReducer from './reducers';
import { createStore } from 'redux'

const store = createStore(rootReducer);

export default store;
```



###### Dispatch actions:

``` html
import { exampleAction, anotherAction } from './actions';

store.dispatch(exampleAction(payload));
```
