import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectList, delItem} from './todolistSlice'

export default () => {
    const list = useSelector(selectList)
    const dispatch = useDispatch()
    return (
        <ul>
            {
                list.map((item) => {
                    return <li key={item.id}>
                        <span>{item.content}</span>
                        <button onClick={() => {
                            dispatch(delItem(item.id))
                        }}>del</button>
                    </li>
                })
            }
        </ul>
    )
}