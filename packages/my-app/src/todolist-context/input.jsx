import React from 'react'
import {TodoContext} from './store'
export default () => {
    return (
        <TodoContext.Consumer>
            {
                ({value, onChange, onSave}) => <>
                <input type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
                <button onClick={()=>onSave()}>add</button>
                </>
            }
            
        </TodoContext.Consumer>
    )
}