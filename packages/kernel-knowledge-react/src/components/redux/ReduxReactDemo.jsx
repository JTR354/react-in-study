import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initState = {
  count: 0,
};

function counter(state = initState, action) {
  const isNullOrUndefined = action.payload == null;
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + (isNullOrUndefined ? 1 : action.payload),
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - (isNullOrUndefined ? 1 : action.payload),
      };
    default:
      return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.log(store.getState());
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  counter,
  composeEnhancers(applyMiddleware(logger, thunk))
);

const Root = () => {
  return (
    <Provider store={store}>
      <h1>redux react demo</h1>
      <section>
        <Panel a="a"></Panel>
        <ToolBar></ToolBar>
      </section>
    </Provider>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const Panel = connect(mapStateToProps)((props) => {
  return <p>{props.count}</p>;
});

function fetchData(...arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(...arg);
    }, 1000);
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch({ type: "INCREMENT", payload: 1 }),
    decrement: () => dispatch({ type: "DECREMENT", payload: 1 }),
    asyncFn: () => dispatch(fetchPosts("INCREMENT")),
  };
};

const fetchPosts = (type) => (dispatch, getState) => {
    dispatch({ type: "DECREMENT", payload: 10 })
  return fetchData(100).then((res) =>
    dispatch({ type, payload: res })
  );
};

const ToolBar = connect(
  null,
  mapDispatchToProps
)((props) => {
  return (
    <div>
      <button onClick={() => props.decrement()}>-</button>
      <button onClick={() => props.increment()}>+</button>
      <button onClick={() => props.asyncFn()}>++++</button>
    </div>
  );
});

export default Root;

/**
 * redux-thunk 封装异步action函数
 * strore.dispatch 参数只能是对象，不能是函数
 * redux-thunk可以传函数
 */
