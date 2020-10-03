import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    selectValue,
    setValue,
    addItem,
    addMore
} from './todolistSlice'

export default () => {
    const value = useSelector(selectValue)
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" value={value} onChange={(e) => {
                dispatch(setValue(e.target.value))
            }} />
            <button onClick={() => {
                dispatch(addItem())
            }}>add</button>
            <button onClick={() => {
                dispatch(addMore())
            }}>add more</button>
        </div>
    )
}