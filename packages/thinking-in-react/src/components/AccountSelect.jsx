import React, { useContext, useRef } from 'react'
import cn from 'classnames'

import {AccountContext} from './Account'

const AccountSelect = ({ className, style, children, list}) => {
  const classes = cn('account-select', className)
  const context = useContext(AccountContext)
  const selectRef = useRef(null)
  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(context)/
    context.onChange(e.target.value)
    selectRef.current.size = 0
  }
  return (
    <div className={classes} style={style}>
      <button onClick={() => {
        selectRef.current.size = 5
      }}>#gl</button>
      <select size={0} ref={selectRef} autoFocus={true} name="pets" id="pet" onChange={handleChange}>
        {children}
      </select>
    </div>
  )
}

const Option = (props) => {
  return <option {...props}>{props.children}</option>
}

const TransSelect = AccountSelect
TransSelect.Option = Option
export default TransSelect