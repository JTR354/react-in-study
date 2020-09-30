import React, {useState} from 'react'
import {TodoContext} from './store'
// import ToolBar from './toolBar'
import Input from './input'
import List from './list'

// export default () => {
//     return (
//         <ThemeContext.Provider value={{color: 'dark'}}>
//             <ToolBar></ToolBar>
//         </ThemeContext.Provider>
//     )
// }

export default () => {
    const [list, setList] = useState([])
    const [value, setValue] = useState('')
    const onChange = (val) => {
        setValue(val)
    }
    const onSave = () => {
        if (!value.trim()) {
            alert('please input anything!')
            return
        }
        const arr = list.slice()
        arr.push({id: String(Math.random()).slice(-6), content: value})
        setList(arr)
        setValue('')
    }
    const onDel = (id) => {
        if (!id) {
            throw new Error('id is not found')
        }
        setList(arr => arr.filter((item) => item.id !== id))
    }
    return (
        <TodoContext.Provider value={{list, value, onChange, onSave, onDel}}>
            <Input></Input>
            <List></List>
        </TodoContext.Provider>
    )
}