import React from 'react'
import ReactDom from 'react-dom'

export default () => {
  return ReactDom.createPortal(<h1 style={modalStyles}>hello world</h1>, document.body)
}

const Modal = () => ReactDom.createPortal(<h1 style={modalStyles}>hello world</h1>, document.body)

const modalStyles = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.7)',
  color: '#fff',
  opacity: 1,
  textAlign: 'center',
}

/**
 * Portals 指定需要挂载的父级元素
 * React.createPortal
 */