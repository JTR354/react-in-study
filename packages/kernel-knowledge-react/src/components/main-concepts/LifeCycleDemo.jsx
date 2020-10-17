import React from 'react'

export default class Root extends React.Component {
  state = {
    count: 0
  }

  componentDidUpdate() {
    console.log(this.constructor.name, 'didUpdate')
  }

  componentDidMount() {
    console.log(this.constructor.name, 'didMount')
  }
  render () {
    return <div>
      <h1 style={{userSelect: false}} onClick={
        () => {
          this.setState({count: this.state.count + 1})
        }
      }>Life Cycle{this.state.count}</h1>
      <Child1></Child1>
    </div>
  }
}


class Child1 extends React.Component {
  componentDidMount() {
    console.log(this.constructor.name, 'did mount')
  }
  componentDidUpdate() {
    console.log(this.constructor.name, 'componentDidUpdate')
  }
  render() {
    return null
  }
}