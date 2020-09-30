import React from 'react'

export default (props) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={(e) => {
                props.onChange(e.target.value)
            }}/>
            <button onClick={() => {
                props.onSave()
            }}>add</button>
        </div>
    )
}