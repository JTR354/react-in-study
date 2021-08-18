import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { useSelector, useDispatch, Provider } from 'react-redux'
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'counter/ADD':
      return state + action.payload || 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const todoReducer = (state = 'todo list', action) => {
  switch (action.type) {
    case 'todo/ADD':
      return state + 'add'
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer
})
const store = createStore(rootReducer)

console.log(store)
const Child = React.memo(() => {
  console.log('Child', 'render')
  return <h1>China</h1>
})

const ReduxPage = props => {
  // const state = store.getState()
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (<>
    <p>{state.todo}</p>
    <p>{state.counter}</p>
    <button onClick={() => {
      // store.dispatch({ type: 'counter/ADD', payload: 2 })
      dispatch({ type: 'counter/ADD', payload: 2 })
    }}>counter add</button>
  </>)
}



function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store} >
        <ReduxPage />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render()

// store.subscribe(render)

export default ReduxPage