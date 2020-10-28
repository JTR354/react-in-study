import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list: []
    };
  }
  // componentDidMount() {
  //   this.setState({count})
  // }
  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  handleCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  };

  handleCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
    console.log(this.state.count);
    this.setState(
      (state, a, b) => {
        console.log(a, b);
        return { count: state.count + 1 };
      },
      (a, b, c) => {
        console.log(this.state.count, "second params");
      }
    );
    console.log(this.state.count);
  };

  handleCount = () => {
    this.setState({count: 1})
    this.setState({count: 323213132})
    this.setState({count: 4})
    console.log(this.state.count)
    setTimeout(() => {
      console.log(this.state.count)
      this.setState({count: this.state.count + 1})
      console.log(this.state.count)
      this.setState({count: this.state.count + 1})
      console.log(this.state.count)
    }, 0)
    setTimeout(() => {
      this.setState({count: this.state.count + 1})
    })
  };

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);

    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);

    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);

    setTimeout(() => {
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);

      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }, 0);

    console.log(this.state.count, 'end');
  }


  handleCount = () => {
    this.setState(state => ({count: state.count + 1}), () => {console.log(this.state.count)})
    console.log(this.state.count)
    
    this.setState(state => ({count: state.count + 1}), () => {console.log(this.state.count)})
    console.log(this.state.count)
    
    this.setState(state => ({count: state.count + 1}), () => {console.log(this.state.count)})
    console.log(this.state.count, 'end')
  }

  handleCount = () => {
    // this.setState({ count: this.state.count + 1000 });
    // console.log(this.state.count);

    // this.setState({ count: this.state.count + 2 });
    // console.log(this.state.count);

    // this.setState({ count: this.state.count + 1 });
    // console.log(this.state.count);

    // setTimeout(() => {
    //   console.log(this.state.count);
    //   this.setState({ count: this.state.count + 1 });
    //   console.log(this.state.count);

    //   this.setState({ count: this.state.count + 1 });
    //   console.log(this.state.count);
    // }, 0);
    Promise.resolve().then(() => {
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
      debugger
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    })

    // console.log(this.state.count, 'end1');

    // this.setState(state => ({count: state.count + 1}), () => {console.log(this.state.count, '1')})
    // console.log(this.state.count)
    
    // this.setState(state => ({count: state.count + 1}), () => {console.log(this.state.count, '2')})
    // console.log(this.state.count)
    
    // this.setState(state => ({count: state.count + 1}), () => {console.log(this.state.count, '3')})
    // console.log(this.state.count, 'end2')
  }

  // handleCount = () => {
  //   // this.state.list.push(Math.random())
  //   // this.setState({list: this.state.list})

  //   this.setState({list: this.state.list.concat(Math.random())})
  // }

  // shouldComponentUpdate(nextProps, nexState) {
  //   return nexState.list !== this.state.list
  // }

  render() {
    console.log('render')
    return (
      <>
        <h1>state setState</h1>
        <h2>{this.state.count}</h2>
        <p onClick={this.handleCount}>setState combine</p>
        <ul>
          {
            this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
            })
          }
        </ul>
      </>
    );
  }
}

/**
 * this.setState 的使用方法
 * 1. 值不可变
 * 2. 参数可以是 object / function , 第二个参数为 刷新之后的值 类似于 Vue.$nextTick
 * 2.1 object 时 多次操作setState会被合并类似于Object.assgin, 而function则不会
 * 3. 当使用异步的时候, this.setState变成同步
 */
