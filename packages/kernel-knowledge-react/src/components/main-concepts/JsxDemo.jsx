import React from 'react'

const list = new Array(3).fill({}).map(() => ({id: String(Math.random()).slice(-6), name: Math.random()}))
export default class extends React.Component {
  render() {
    const row = () => {
      if (1 > Math.random()) {
        return <h2>2</h2>
      } else {
        return <h1>1</h1>
      }
    }
    let col = null 
    if (1<2) {
      col = <h3>3</h3>
    } else {
      col = <h5>4</h5>
    }
    return (
      <>
      <div>{123}</div>
      <ul>
        {
          list.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>
      <p>
        {
          1 > 2 ? <span>3</span> : <span>目</span>
        }
        {
          true && <span>888</span>
        }
      </p>
      {row()}
      {col}
      </>
    )
  }
}

/**
 * jsx 渲染 {}
 * 条件 三目运算 / 布尔值 / if else 赋值等
 * 列表渲染 key值
 */