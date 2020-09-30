import React from 'react'
import {TodoContext} from './store'

export default () => {
    return (
        <ul>
            <TodoContext.Consumer>
            {
                ({list, onDel}) => {
                return list.map((item) => <li key={item.id}>{item.content}<button onClick={() => {onDel(item.id)}}>del</button></li>)
                }
            }
        </TodoContext.Consumer>
        </ul>
        
    )
}