// /* eslint-disable import/no-anonymous-default-export */
// import React, { useState } from 'react';

// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 }
//   }
//   handleClick = () => {
//     this.setState((state) => ({ state, counter: state.counter + 1 }))
//     console.log(this.state.counter, 'handleClick') // 0
//     this.setState((state) => ({ state, counter: state.counter + 1 }))
//     console.log(this.state.counter, 'handleClick') // 0
//     this.setState((state) => ({ state, counter: state.counter + 1 }))
//     console.log(this.state.counter, 'handleClick') // 0
//   }
//   // componentDidMount() {
//   //   document.documentElement.addEventListener('click', () => {
//   //     this.setState({ counter: this.state.counter + 1 })
//   //     console.log(this.state.counter, 'handleClick') // 1
//   //   })
//   // }
//   render() {
//     console.log(this.state.counter, 'render') // 1
//     return (<>
//       <p>{this.state.counter}</p>
//       <button onClick={this.handleClick}>add</button>
//     </>);
//   }
// }

// export default () => {
//   const [counter, setCounter] = useState(0)
//   const date = useClock()
//   console.log('render', counter)
//   return (<div>
//     <p>{counter}</p>
//     <button onClick={() => {
//       // setTimeout(() => {
//       //   setCounter(counter + 1)
//       //   console.log(counter, 'click')
//       // }, 0)
//       setCounter(counter + 1)
//       console.log(counter)
//     }}>add+</button>
//     <p>{date.toLocaleDateString()}</p>
//   </div>)
// };

// //⾃自定义hook，命名必须以use开头
// function useClock() {
//   const [date, setDate] = useState(new Date());
//   console.log(555)
//   React.useEffect(() => {
//     console.log("date effect");
//     //只需要在didMount时候执⾏行行就可以了了
//     const timer = setInterval(() => {
//       setDate(new Date());
//     }, 1000);
//     //清除定时器器，类似willUnmount
//     return () => clearInterval(timer);
//   }, []);
//   return date;
// }

import React, { useState, useMemo, useCallback } from "react";


function request() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

function Child1(props) {
  console.log(Child1.name, 'render')
  return <span onClick={() => props.addClick()}>{props.children}{props.value2?.a?.b}</span>
}
const Child2 = React.memo(Child1)
export default function UseMemoPage(props) {
  const [count, setCount] = useState(0);
  const [value2, setValu2] = useState({ a: { b: 1 } })
  const expensive = useMemo(() => {
    // let sum = 0;
    // for (let i = 0; i < count; i++) {
    //   sum += i;
    // }
    console.log('expensive')
    return <Child1>{count}</Child1>;
    //只有count变化，这⾥才重新执⾏
  }, []);
  const [value, setValue] = useState("");
  const addClick = useCallback(() => {

  }, [])
  console.log(UseMemoPage.name, 'render')

  return (
    <div>
      <h3 onClick={() => {
        setValu2(state => ({ ...state }))
      }}>UseMemoPage</h3>
      <p>expensive:{expensive}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child2 addClick={addClick} value2={value2} />
    </div >
  );
}