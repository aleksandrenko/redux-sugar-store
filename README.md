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
