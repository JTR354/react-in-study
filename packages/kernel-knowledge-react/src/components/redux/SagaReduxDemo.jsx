import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider, connect} from 'react-redux'
import rootSaga from './sagas'


const reducer = (state = 0, action) => {
    // console.log(action, '')
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state  - 1
        default:
            return state
    }
}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({type})

export default () => {
    return <Provider store={store}>
        <h1>Saga Redux Demo</h1>
        <Counter />,
    </Provider>
}



const CounterCom = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>
const mapStateToProps = state => {
    return {value: state}
}


const mapDispatchToProps = dispatch => {
    const action = type => dispatch({type})
    return {
        onIncrement: () => action('INCREMENT'),
        onDecrement: () => action('DECREMENT'),
        onIncrementAsync: () => action('INCREMENT_ASYNC')
    }
}
const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterCom)