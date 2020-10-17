import React from 'react'

export default (props) => {
  const {value, onChange, filterText, onFilterText} = props
  return (
    <div>
      <input type="text" value={filterText} onChange={(e) => {
        onFilterText(e.target.value)
      }} placeholder='Search...'/>
      <p>
        <label>
          <input type="checkbox" checked={value} onChange={(e) => {
            onChange()
          }} />
          <span>Only show products in stock</span>
        </label>
      </p>
    </div>
  )
}