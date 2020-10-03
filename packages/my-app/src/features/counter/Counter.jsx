import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    selectCounter,
    increment,
    decrement,
    incrementByAmount
} from './counterSlice'

export default () => {
    const count = useSelector(selectCounter)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(2)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() =>  dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <button onClick={() => {
                    dispatch(incrementByAmount(Number(amount) || 0))
                }}>add amount</button>
                <button onClick={() => {
                    dispatch(incrementByAmount(-Number(amount) || 0))
                }}>decrement amount</button>
            </div>
        </div>
    )
}