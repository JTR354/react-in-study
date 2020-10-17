import React, {useRef, useImperativeHandle} from 'react'
function Fnc (props, ref) {
  // const ref = useRef()
  useImperativeHandle(ref, () => {
    return {
      a: () => {
        console.log(this, 'fa')
      }
    }
  })
  return (
    <h3>Fnc function compoennt</h3>
  )
}
Fnc = React.forwardRef(Fnc)
export default class extends React.Component {
  constructor() {
    super()
    this.filesRef = React.createRef()
    this.childRef = React.createRef()
    this.childFnRef = React.createRef()
  }
  state = {
    value: '',
    files: null
  }
  render() {
    return (
      <>
        <h1>Uncontrolled Demo</h1>
        <h2>controlled component</h2>
        <label>
          name:<span>{this.state.value}</span>
          <br />
          <input type="text" value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
        </label>
        <h2>uncontrolled component</h2>
        <label htmlFor="" >
          <input type="file" ref={this.filesRef} onChange={(e) => {
            // console.log(e.target.files)
            // e.target.value = null
            // console.log(this.filesRef.current.files)
            // this.filesRef.current.value = null
            // this.files = e.target.files
            this.setState({ files: e.target.files }, () => {
              console.log(this.state.files)
            })
            console.log(this.state)
          }} />
        </label>
        <Input ref={this.childRef}></Input>
        <button onClick={() => {
          this.childRef.current.handleCount()
        }}>click child</button>
        <Fnc ref={this.childFnRef}></Fnc>
        <button onClick={() => {
          console.log(this.childFnRef)
        }}>click child fn</button>
      </>
    )
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  componentDidMount() {
    this.handleCount()
  }
  render() {
    return <div>Input{this.state.count}</div>
  }
}

