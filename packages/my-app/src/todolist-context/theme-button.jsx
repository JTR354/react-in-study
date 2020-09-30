import React from 'react'
import {ThemeContext} from './store'
export default () => {
    const contextType = ThemeContext
    console.log(contextType)
    return (
        <ThemeContext.Consumer>
            {({color}) => {
                return <div>{color}</div>
            }}
        </ThemeContext.Consumer>
    )
}

/*export default class extends React.Component {
    static contextType = ThemeContext
    render() {
        console.log(this.context)
        return (
            <div>55</div>
        )
    }
}*/