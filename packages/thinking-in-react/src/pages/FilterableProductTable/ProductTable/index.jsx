import React from 'react'
import ProductRow from '../ProductRow'
import ProductCategoryRow from '../ProductCategoryRow'
import { useMemo } from 'react'

export default (props) => {
  const row = useMemo(() => {
    const _row = []
    let lastCategory = null
    for (let product of props.products) {
      if (props.inStockOnly && !product.stocked) {
        continue
      }
      if (product.name.indexOf(props.filterText) === -1) {
        continue
      }
      if (lastCategory !== product.category) {
        _row.push(<ProductCategoryRow key={product.name + product.category} category={product.category} />)
      }
      _row.push(<ProductRow product={product} key={product.name + product.price}></ProductRow>)
      lastCategory = product.category
    }
    return _row
  }, [props])

  return (
    <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>
  )
}