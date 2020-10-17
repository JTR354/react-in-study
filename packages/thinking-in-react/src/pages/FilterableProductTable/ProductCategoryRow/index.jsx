import React from 'react'

export default (props) => {
  const {category} = props
  return <tr>
    <th colSpan={2}>{category}</th>
  </tr>
}