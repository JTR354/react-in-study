import React, {useState} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import './index.css'

export default (props) => {
  const {products} = props
  const [inStockOnly, setInStockOnly] = useState(false)
  const [filterText, setFilterText] = useState('')
  return(
    <div className="content">
      <SearchBar value={inStockOnly} onChange={() => {
        setInStockOnly(bool => !bool)
      }} filterText={filterText} onFilterText={(text) => {
        setFilterText(text)
      }}></SearchBar>
      <ProductTable products={products} inStockOnly={inStockOnly} filterText={filterText}></ProductTable>
    </div>
  )
}