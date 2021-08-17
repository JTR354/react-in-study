import React, { useCallback, useMemo, useState } from 'react';

const UseCallbackPage = props => {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState('')
  const addClick = useCallback(() => {
    console.log(addClick.name, 'render')
    setCounter(state => state + 1)
  }, [])
  console.log(UseCallbackPage.name, 'render')
  return (<>
    <p>{value}</p>
    <input value={value} onChange={(e) => setValue(e.target.value)} />
    <button onClick={() => setCounter(counter + 1)}>add</button>
    <Child counter={counter} addClick={addClick}></Child>
  </>)
}

const Child = React.memo((props) => {
  console.log('Child', 'render')
  return (<div onClick={props.addClick}>{props.counter}</div>)
})

export default UseCallbackPage