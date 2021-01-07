import React from 'react'
import cn from 'classnames'

const AccountInput = ({ className, style, children, type = 'text', maxLength = '4', name }) => {
  const classes = cn('account-input', className)
  style = { width: `${maxLength}em`,...style}
  return (
    <div className={classes} style={style}>
      <input type={type} maxLength={maxLength} name={name}/>
    </div>
  )
} 

export default AccountInput