import {createSlice, nanoid} from '@reduxjs/toolkit'

const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        list: [],
        value: ''
    },
    reducers: {
        setValue: (state, {payload}) => {
            state.value = payload
        },
        addItem:(state) => {
            if (!state.value.trim()) {
                alert('please input anything!')
                return
            }
            const obj = {
                id: nanoid(),
                content: state.value
            }
            state.list.push(obj)
            state.value = ''
        },
        delItem(state, {payload}) {
            state.list = state.list.filter((item) => item.id !== payload)
        }
    }
})

export const {setValue, addItem, delItem} = todolistSlice.actions

export const selectValue = (state, a) => {
    return state.todolist.value
}

export const selectList = (state) => state.todolist.list

export const addMore = arg => dispatch => {
    console.log(arg)
    setTimeout(() => {
        dispatch(() => {})
    }, 1000)
}

export default todolistSlice.reducer