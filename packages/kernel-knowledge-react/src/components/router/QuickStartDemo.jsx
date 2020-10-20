import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route, useRouteMatch, useParams, useHistory } from "react-router-dom";
import {withRouter} from 'react-router'
const Portals = React.lazy(() => import('../../components/advanced/PortalsDemo'))

export default () => {
  const [configRouters, setConfigRouters] = useState([
    {
      path: "/about",
      component:() => <About></About>,
    },
    {
      path: "/user",
      component: () => <User></User>,
    },
    {
      path: "/",
      component: () => <Home></Home>,
      exact: true
    },
    {
        path: '/topics',
        component: () => <Topics></Topics>,
        children: [{
            path: 'topic-child',
            component: () => <TopicChild></TopicChild>
        }]
    }
  ]);
  return (
    <BrowserRouter>
      <h1>router demo</h1>
      <ul>
        {configRouters.map((config) => {
          return (
            <li key={config.path}>
              <Link to={config.path + '?a=3&b=5'}>
                {config.path.replace("/", "") || "home"}
              </Link>
            </li>
          );
        })}
        <li><Link to='/async'>async</Link></li>
      </ul>
      <React.Suspense fallback={<div>loading ...</div>}>
      <Switch>
        {configRouters.map((config) => {
          return (
            <Route key={config.path} exact={config.exact} path={config.path}>
              {config.component()}
            </Route>
          );
        })}
        <Route path='/async'>
            <Portals></Portals>
        </Route>
      </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

function About(props) {
    console.log(props)
  return <h2>About</h2>;
}

About = withRouter(About)

function User(props) {
    console.log(props)
    console.log(useRouteMatch())
    const history = useHistory()
  return <h2>User
      <p>
          <button onClick={() => history.push('/about?a=333&b=887')}>go about</button>
      </p>
  </h2>;
}
User = withRouter(User)

function Home(props) {
    // console.log(props)
  return <h2>Home</h2>;
}

/**
 * react-router-dom
 * 1. BrowserRouter 容器
 * 2. Link 提供路由能力
 * 3. Route 提供页面容器视图的能力
 * 4. Switch 包裹Route 提供逻辑分支能力
 */

function Topics () {
    let match = useRouteMatch()
    console.log(match)
    return <>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/component?a=9`}>Component</Link>
            </li>
            <li>
                <Link to={`${match.url}/A`}>OTHERS</Link>
            </li>
        </ul>
        <Switch>
            <Route path={`${match.path}/:topicId`}>
                <TopicChild></TopicChild>
            </Route>
            <Route path={`${match.path}`}>
                <h3>others</h3>
            </Route>
        </Switch>
    </>
}

function TopicChild () {
    console.log(useRouteMatch())
    let params = useParams()
    return <>
        <h2>TopicChild Id is{params.topicId}</h2>
    </>
}