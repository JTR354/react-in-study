import React from 'react'
import ReactDom from 'react-dom'

export default () => {
  return ReactDom.createPortal(<h1 style={{position: 'fixed'}}>hello world</h1>, document.body)
}

/**
 * Portals 指定需要挂载的父级元素
 * React.createPortal
 */