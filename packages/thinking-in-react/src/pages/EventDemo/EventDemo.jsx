import React from 'react'

export default class extends React.Component {
  handleClick = (a, b, event) => {
    // console.log(a, b)
    // console.log('event', event)
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.__proto__.constructor) // SyntheticEvent
    console.log(event.nativeEvent)
    console.log(event.nativeEvent.target)
    console.log(event.nativeEvent.currentTarget)
  }
  render() {
    return <div data-testid='event-demo' onClick={(e) => this.handleClick(1,2, e)}>click me</div>
  }
}


var aa = {K: 1}
test(aa)
console.log('aa', aa)
function test(a) {
  a.Kk = 123
  a =78
  console.log(a)
}