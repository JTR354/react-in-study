import React from 'react'
import {Switch, Link, Route, BrowserRouter as Router, useRouteMatch, useParams, NavLink} from 'react-router-dom'
import './app.css'

export default () => {
    return <Router>
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/user">user</Link></li>
                <li><NavLink to="/topics" activeClassName="colorRed">topics</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/" exact={true}>
                <Home></Home>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/user">
                <User/>
            </Route>
            <Route path="/topics">
                <Topics></Topics>
            </Route>
        </Switch>
    </Router>
}


const Home = () => <h2>HOME</h2>
const About = () => <h2>ABOUT</h2>
const User = () => <h2>USER</h2>


function Topics() {
    const match = useRouteMatch()
    return <>
        <h2>topics</h2>
        <nav>
            <ul>
                <li>
                    <Link to={`${match.url}/component`}>component</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>props-v-state</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path={`${match.path}/:topicId`}>
                <Topic></Topic>
            </Route>
            <Route path={match.path}>
                <h3>please select a topic.</h3>
            </Route>
        </Switch>
    </>
}

function Topic() {
    const {topicId} = useParams()
    // const match = useRouteMatch()
    // console.log(topicId, match)
    return <>
        <h2>topic ID: {topicId}</h2>
    </>
}