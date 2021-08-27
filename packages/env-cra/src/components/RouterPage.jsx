import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Link, Route, Switch, useRouteMatch, useParams, useLocation, useHistory } from 'react-router-dom'
import styles from './router-page.module.css'

const Topic = React.memo(() => {
  const params = useParams()
  const location = useLocation()
  const match = useRouteMatch()
  const { topicId } = params
  console.log(params, 9e9, location, '==', match)
  useEffect(() => {
  }, [])
  return <h3>Requested topic ID: {topicId}</h3>
})

const Topics = React.memo(() => {
  const history = useHistory()
  const match = useRouteMatch()
  const location = useLocation()
  const params = useParams()
  useEffect(() => {
    // console.log('T Father render')
  }, [])
  return (
    <>
      <h2>Topics</h2>
      <button onClick={() => {
        // console.log(history)
        // history.push('history', {
        //   a:
        //     'asdad', b: new Array(7).fill(666)
        // })
        const data = { id: 3, name: 'jack', age: '6', m: Math.random() }
        // const obj = {
        //   path: `${match.url}/query`,
        //   state: data,
        //   a: { a: '123s' }
        // }
        // history.push(obj)
        console.log(history)
        history.replace(`${match.url}/query`, data)
      }}>to component</button>
      <nav>
        <Link to={`${match.url}/{component}`}>Components</Link>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </nav>
      <Switch>
        <Route path={`${match.path}/:topicId`}><Topic /></Route>
        <Route path={`${match.path}`}><h3>Please select a topic.</h3></Route>
      </Switch>
    </>
  )
})


const RouterPage = props => {
  return (<div className={styles.routerPage}>
    <BrowserRouter>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/user">user</Link>
        <Link to="/topics">topics</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>)
}

function Home() {
  return <div>{Home.name}</div>
}

function About() {
  useEffect(() => {
    console.log(About.name, 'render', 999)
  }, [])
  return <div>{About.name}</div>
}

function User() {
  return <div>{User.name}</div>
}



export default RouterPage