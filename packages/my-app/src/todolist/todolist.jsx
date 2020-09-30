import React, {useState} from 'react'
import List from './list'
import Input from './input'

export default () => {
    const [list, setList] = useState([])
    const [current, setCurrent] = useState('')
    const onChange = (value) => {
        setCurrent(value)
    }
    const onSave = () => {
        if(!current.trim()) {
            alert('please input something!')
            return
        }
        const arr = list.slice()
        arr.push({id: String(Math.random()).slice(-6), content: current})
        setList(arr)
        setCurrent('')
    }
    const onDel = (id) => {
        const arr = list.filter(val => val.id !==id)
        setList(arr)
    }
    return (
        <div>
            <Input onChange={onChange} value={current} onSave={onSave} ></Input>
            <List list={list} onDel={onDel}></List>
        </div>
    )
}