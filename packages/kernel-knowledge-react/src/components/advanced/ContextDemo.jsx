import React from 'react'

const DemoContext = React.createContext({ world: '', onChange: () => { } })

export default class extends React.Component {
  state = {
    world: '123'
  }
  render() {
    return <DemoContext.Provider value={{
      world: this.state.world,
      onChange: (e) => {
        this.setState({ world: this.state.world + 1 })
      }
    }}>
      <ToolBar />
    </DemoContext.Provider>
  }
}

function ToolBar(params) {
  return <div>
    <Top></Top>
    <Bottom></Bottom>
  </div>
}

function Top() {
  return <DemoContext.Consumer>
    {(o, a, b) => {
      return <p onClick={o.onChange}>{o.world}</p>
    }}
  </DemoContext.Consumer>
}

class Bottom extends React.Component {
  static contextType = DemoContext
  render() {
    return <h3>{this.context.world}</h3>
  }
}


/**
 * context 
 * 1. 创建 React.createContext
 * 2. 提供数据 Provider
 * 3. 消费数据 Cusumer/Function contextType/Class
 */