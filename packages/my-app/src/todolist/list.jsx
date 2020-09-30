import React from 'react'

export default (props) => {
    return (
        <ul>
            {
                props.list.map((item) => {
                    return (
                        <li key={item.id}><span>{item.content}</span><button onClick={() => {
                            props.onDel(item.id)
                        }} >del</button></li>
                    )
                })
            }
        </ul>
    )
}