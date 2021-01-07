import React from 'react'
import cn from 'classnames'

export const AccountContext = React.createContext({})

const Account = ({ className, style, mode, children, onSelect }) => {
  const classes = cn('account-no', className)
  const passedContext = {
    onChange(e) {
      typeof onSelect === 'function' && onSelect(e)
    }
  }
  return (
    <div className={classes} style={style}>
      <AccountContext.Provider value={passedContext}>
        {children}
      </AccountContext.Provider>
    </div>
  )
}


export default Account