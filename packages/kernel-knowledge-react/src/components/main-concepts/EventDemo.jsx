import React from 'react'

export default () => {
  return (
    <a href="#" onClick={(e) => {
      e.stopPropagation()
      e.preventDefault()
      console.log(e)
      console.log('e.target', e.target)
      console.log('e.currentTarget', e.currentTarget)
      console.log('e 构造函数', e.__proto__) // SyntheticEvent

      console.log(e.nativeEvent)
      console.log(e.nativeEvent.target)
      console.log(e.nativeEvent.currentTarget)
    }}>click me</a>
  )
}

/**
 * React 事件模型 已经重构了,模拟了原生native的所用功能
 * nativeEvent事件绑定在document上面
 */