import React, { useState } from "react";

export default class extends React.Component {
  render() {
    return (
      <>
        <h1>HOC Component</h1>
        <Mouse></Mouse>
        <House
          fn={({ x, y }) => (
            <h2>
              fn x:{x} y:{y}
            </h2>
          )}
        ></House>
        <FactoryFunction
          fn={({ x, y }) => (
            <h2>
              fn Component x:{x} y:{y}
            </h2>
          )}
        ></FactoryFunction>
        <MouseHook></MouseHook>
      </>
    );
  }
}

function FactoryHOC(Component) {
  class Hoc extends React.Component {
    state = {
      x: undefined,
      y: undefined,
    };
    render() {
      return (
        <div
          onMouseMove={(e) => {
            this.setState({
              x: e.clientX,
              y: e.clientY,
            });
          }}
        >
          <Component
            {...this.props}
            x={this.state.x}
            y={this.state.y}
          ></Component>
        </div>
      );
    }
  }
  return Hoc;
}

const Mouse = FactoryHOC((props) => (
  <div>
    mouse{props.x}
    {props.y}
  </div>
));

class House extends React.Component {
  state = {
    x: "",
    y: "",
  };
  render() {
    const { x, y } = this.state;
    return (
      <div
        onMouseMove={(e) => {
          this.setState({
            x: e.clientX,
            y: e.clientY,
          });
        }}
      >
        <h1>House</h1>
        {this.props.fn({ x, y })}
      </div>
    );
  }
}

function FactoryFunction(props) {
  const [pos, setPos] = useState({ x: "", y: "" });
  return (
    <div
      onMouseMove={(e) => {
        setPos({ x: e.clientX, y: e.clientY });
      }}
    >
      <h1>Function Component</h1>
      {props.fn(pos)}
    </div>
  );
}

function useMouse() {
  const [pos, setPos] = useState({ x: "", y: "" });
  return {
    ...pos,
    onMouseMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    },
  };
}

function MouseHook() {
  const { x, y, onMouseMove } = useMouse();
  return (
    <div>
      <h2>Use Hook </h2>
      <p onMouseMove={onMouseMove}>
        hooks component X:{x} Y:{y}
      </p>
    </div>
  );
}
