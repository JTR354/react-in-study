import React, {useState} from 'react'
import {TodoContext} from './store'
import Input from './input'
import List from './list'

function createItem(val) {
    return {
        id: String(Math.random()).slice(-6),
        content: val
    }
}

export default () => {
    const [list,setList] = useState([])
    const [value, setValue] = useState('')
    const onChange = (text) => {
        setValue(text)
    }
    const onSave = () => {
        if (!value.trim()) {
            alert('please input anything!')
            return
        }
        const arr = list.slice()
        arr.push(createItem(value))
        setList(arr)
        setValue('')
    }
    const onDel = (id) => {
        if (!id) {
            throw new Error('id is not found!')
        }
        setList(arr => arr.filter((item) => item.id !== id))
    }
    return (
        <TodoContext.Provider value={{list,onChange,value, onDel, onSave}}>
            <Input></Input>
            <List></List>
        </TodoContext.Provider>
    )
}