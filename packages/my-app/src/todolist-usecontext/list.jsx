import React, {useContext} from 'react'
import {TodoContext} from './store'
export default () => {
    const {list, onDel} = useContext(TodoContext)

    return <ul>
        {
            list.map((item) => <li key={item.id}>{item.content}<button onClick={() => onDel(item.id)}>del</button></li>)
        }
    </ul>
}