import React from "react";
import ReactDOM from 'react-dom'

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    log(this);
    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    log(this, this.componentWillMount);
  }
  componentDidMount() {
    log(this, this.componentDidMount);
  }
  componentWillUpdate() {
    log(this, this.componentWillUpdate);
  }
  componentDidUpdate() {
    log(this, this.componentDidUpdate);
  }
  componentWillReceiveProps() {
    log(this, this.componentWillReceiveProps);
  }
  shouldComponentUpdate() {
    log(this, this.shouldComponentUpdate);
    return true;
  }
  componentDidCatch() {
    log(this, this.componentDidCatch);
  }
  componentWillUnmount() {
    log(this, this.componentWillUnmount);
  }
  render() {
    log(this, this.render);
    return (
      <div id="$$testParent">
        <h1
          onClick={() => {
            this.setState((state) => ({ count: state.count + 1 }));
          }}
        >
          {this.state.count}
        <button onClick={(e) => {
            e.stopPropagation()
            this.setState({count: -1})
        }}>to unmount children</button>
        </h1>
        {this.state.count > -1 && <Child></Child>}
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    log(this);
  }
  componentWillMount() {
    log(this, this.componentWillMount);
  }
  componentDidMount() {
    log(this, this.componentDidMount);
  }
  componentWillUpdate() {
    log(this, this.componentWillUpdate);
  }
  componentDidUpdate() {
    log(this, this.componentDidUpdate);
  }
  componentWillReceiveProps() {
    log(this, this.componentWillReceiveProps);
  }
  shouldComponentUpdate() {
    log(this, this.shouldComponentUpdate);
    return true;
  }
  componentDidCatch() {
    log(this, this.componentDidCatch);
  }
  componentWillUnmount() {
    log(this, this.componentWillUnmount);
  }
  render() {
    log(this, this.render);
    return <div>
        <h2>children</h2>
            <GrandChild></GrandChild>
        </div>
  }
}

class GrandChild extends React.Component {
    constructor(props) {
        super(props);
        log(this);
      }
      componentWillMount() {
        log(this, this.componentWillMount);
      }
      componentDidMount() {
        log(this, this.componentDidMount);
      }
      componentWillUpdate() {
        log(this, this.componentWillUpdate);
      }
      componentDidUpdate() {
        log(this, this.componentDidUpdate);
      }
      componentWillReceiveProps() {
        log(this, this.componentWillReceiveProps);
      }
      shouldComponentUpdate() {
        log(this, this.shouldComponentUpdate);
        return true;
      }
      componentDidCatch() {
        log(this, this.componentDidCatch);
      }
      componentWillUnmount() {
        log(this, this.componentWillUnmount);
      }
      render() {
        log(this, this.render);
        return <h3>grand children</h3>;
      }
}

function log(ctx, fn) {
  if (typeof fn === "function") {
    console.log(ctx.constructor.name, fn.name);
  } else {
    console.log(ctx.constructor.name, "constructor");
  }
}
