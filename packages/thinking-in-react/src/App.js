import React, { useEffect, useRef, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import FilterableCategoryRow from './pages/FilterableProductTable'
import EventDemo from './pages/EventDemo/EventDemo'
import Account from './components/index.jsx'
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
const productions = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
function App () {
  const [list, setList] = useState([]) 
  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    for (let name of data) {
      // console.log(name)
    }
  }
  const handleSelect = (s) => {
    console.log(formRef.current[0])
    formRef.current[0].value = s
    // formRef.current.setList('a', s)
  }
  useEffect(() => {
    setList([
      {
        value: 'cat', text: 'cat'
      },
      {
        value: 'mouse', text: 'mouse'
      },
      {
        value: 'dog', text: 'dog'
      }
    ])
  }, [])
  return (
    <div style={{margin: '50px auto', width: '50%'}}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Account onSelect={handleSelect}>
          <Account.Label>Account NO</Account.Label>
          <Account.Input maxLength="2" name="a"></Account.Input>
          <Account.Input maxLength="4" name="b"></Account.Input>
          <Account.Input maxLength="4" name="c"></Account.Input>
          <Account.Select list={list}>
            {list.map((item) => {
              return <Account.Select.Option key={item.value} value={item.value}>{item.text}</Account.Select.Option>
            })}
          </Account.Select>
        </Account>
        <button type="submit">submit</button>
      </form>
      {/* <FilterableCategoryRow products={productions}></FilterableCategoryRow>
      <EventDemo></EventDemo> */}
    </div>
  )
}
export default App;
