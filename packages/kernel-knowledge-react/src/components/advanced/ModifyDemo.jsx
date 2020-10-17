import React, { Component } from 'react'

export default class ToDoList extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <div>
        <h1>ToDoList</h1>
        <Header onAddItem={val => {
          this.setState((state) => ({
            list: state.list.concat({
              id: String(Math.random()).slice(-6),
              text: val
            })
          }))
        }}></Header>
        <List list={this.state.list}></List>
        <Footer a='12313'></Footer>
      </div>
    )
  }
}

class Header extends Component {
  state = {
    value: ''
  }
  render() {
    return <div>
      <input type="text" placeholder='add ' value={this.state.value} onChange={(e) => {
        this.setState({ value: e.target.value })
      }} onKeyUp={e => {
        if (e.key === 'Enter' && !!this.state.value) {
          this.props.onAddItem(this.state.value)
          this.setState({ value: '' })
        }
      }} />
    </div>
  }
}

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        <ul>
          {
            list && list.map((item) => {
              return <li key={item.id}>{item.text}</li>
            })
          }
        </ul>
      </div>
    )
  }
}


// class Footer extends Component {
//   shouldComponentUpdate(nextProps, nextState ) {
//     // console.log(nextProps, nextState)
//     let flag = this.$p !== nextProps
//     this.$p = nextProps
//     return flag
//   }
//   render() {
//     console.log(this.constructor.name, 'render')
//     return <h1>
//       Footer
//     </h1>
//   }
// }

// class Footer extends React.PureComponent {
//   // shouldComponentUpdate(nextProps, nextState ) {
//   //   // console.log(nextProps, nextState)
//   //   let flag = this.$p !== nextProps
//   //   this.$p = nextProps
//   //   return flag
//   // }
//   render() {
//     console.log(this.constructor.name, 'render')
//     return <h1>
//       Footer
//     </h1>
//   }
// }

const Footer = React.memo((props) => {
  console.log('footer')
  return <h2>Footer{props.a}</h2>
})


/**
 * React 性能优化点, 优化子组件在数据未发生变化时的更新
 * 1. shouldComponentUpdate true/false
 * 2. React.PureComponent / class
 * 3. React.meno / function
 */