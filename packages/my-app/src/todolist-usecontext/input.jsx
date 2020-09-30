import React, {useContext} from 'react'
import {TodoContext} from './store'

export default () => {
    const {value, onChange, onSave} = useContext(TodoContext)
    return <>
        <input type="text" value={value} onChange={(e) => {
            onChange(e.target.value)
        }}/>
        <button onClick={() => onSave()}>add</button>
    </>
}