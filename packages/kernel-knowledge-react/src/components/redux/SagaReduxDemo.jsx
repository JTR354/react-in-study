import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import createSagaMiddleWare from 'redux-saga'
import mySaga from './mySaga'

const sagaMdiddle = createSagaMiddleWare()

const user = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA':
            return state.concat(action.payload)
        default:
            return state
    }
}


const rootReducers = combineReducers({user})
const store = createStore(rootReducers, applyMiddleware(sagaMdiddle))
sagaMdiddle.run(mySaga)

export default () => {
    return <Provider store={store}>
        <h1>SagaDemo</h1>
        <Top></Top>
    </Provider>
}
const mapStateToProps = state => {
    console.log(state);
    return state
}
const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({type: 'GET_DATA', payload: 123})
    }
}
const Top = connect(mapStateToProps, mapDispatchToProps)((props) => {
    return <div>
        <h3 onClick={() => {
            props.add()
        }}>add</h3>
    </div>
})