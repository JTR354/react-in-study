import React, { useCallback, useState } from 'react'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'

export function sleep(timer = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => { 
            resolve()
        }, timer)
    })
}

const initalState = {
    counter: 100,
    lister: [2]
}



const counter = function(count = 0, action) {
    switch(action.type) {
        case 'IN': 
            return count + 1
        case 'DE':
            return count - 1
        default:
            return count
    }
}

const lister = function(list = [], action) {
    switch(action.type) {
        case 'ADD': 
            return list.concat(action.payload)
        case 'DEL':
            return list.slice(0, -1)
        case 'FILTER':
            return list.filter(item => item.id !== action.id)
        case 'TOGGLE':
            return list.map((item) => ({...item, undo: item.id === action.id ? !item.undo : item.undo}))
        default:
            return list
    }
}

const rootReducer = combineReducers({
    counter,
    lister
})

const enhancerCompose = (...arg) => {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        arg.unshift(window.__REDUX_DEVTOOLS_EXTENSION__())

    }
    return compose(...arg)
}
/*   
middleWare one by one
const a = store => next => async action => {
    console.log('a start')
    await sleep()
    console.log('a end')
    return next(action)
}
const b = store => next => action => {
    console.log('b')
    return next(action)
}
*/
const store = createStore(rootReducer, initalState, enhancerCompose(applyMiddleware()))

const mapDispatchToProps = dispatch => {
    return {
        inc: () => dispatch({type: 'IN'}),
        dec: () => dispatch({type: 'DE'}),
        add: (payload) => dispatch({type: 'ADD', payload})
    }
}

const Header = connect(null, mapDispatchToProps)((props) => {
    const [value, setValue] = useState('')
    const addItem = useCallback(() => {
        if (!value) return
        props.add({
            id: String(Math.random()).slice(-6),
            text: value,
            undo: true
        })
        setValue('')
    }, [value, setValue])
    return <>
        <input type="text" value={value} onChange={(e) => {
            setValue(e.target.value)
        }} onKeyUp={e => {
            if (e.key === 'Enter') {
                addItem()
            }
        }}/>
        <button onClick={() => {
            addItem()
        }}>add</button>
    </>
})

const Panel = connect()((props) => {
    const {title} = props
    return <>
        <h4>{title}</h4>
        <ul>
            {
                props.list.map((item) => props.render({key: item.id, item}))
            }
        </ul>
    </>
})


const ToDoItem = connect(null, (dispatch) => {
    return {
        filter: (id) => dispatch({type: 'FILTER', id}),
        toggle: (id) => dispatch({type: 'TOGGLE', id})
    }
})((props) => {
    const {item, filter, toggle} = props
    return <>
        <li onClick={() => {    
            toggle(item.id)
        }}>{item.text}<button onClick={() => filter(item.id)}>delete</button></li>
    </>
})

const ToDoList = connect(
    (state) => {
        return {
            undoList: state.lister.filter(item => item.id && item.undo),
            doList: state.lister.filter(item => item.id && !item.undo)
        }
    }
)((props) => {
    return <>
    <Header></Header>
    <Panel title='未完成' list={props.undoList} render={(args) => <ToDoItem {...args}></ToDoItem>}></Panel>
    <Panel title='已完成' list={props.doList} render={(args) => <ToDoItem {...args}></ToDoItem>}></Panel>
    </>
})

export default () => {
    return <Provider store={store}>
        <h1>ToDoList Demo</h1>
        <ToDoList></ToDoList>
    </Provider>
}