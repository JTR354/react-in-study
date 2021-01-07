import React from 'react'
import cn from 'classnames'

const AccountLabel = ({ className, style, children, htmlFor}) => {
  const classes = cn('account-label', className)
  return (
    <>
      <label htmlFor={htmlFor} className={classes} style={style}>{children}</label>
    </>
  )
}

export default AccountLabel