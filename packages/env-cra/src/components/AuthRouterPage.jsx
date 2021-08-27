import React, { useContext, useState } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect, useHistory } from 'react-router-dom';

const ROUTE_CONFIG = [
  {
    path: '/',
    exact: 'true',
    component: Home
  },
  {
    path: '/list',
    component: List,
    author: true,
    routes: [
      {
        path: '/list/detail',
        author: true,
        component: Detail
      }
    ]
  },
  {
    path: '/user',
    author: true,
    component: User
  },
  {
    path: '/login',
    hide: true,
    root: true,
    component: Login
  },
  {
    path: '*',
    hide: true,
    root: true,
    component: NotFoundPage
  }
]


const AuthContext = React.createContext()

const AuthRouterPage = () => {
  const [auth, setAuth] = useState(false)
  return <AuthContext.Provider value={{ auth, login: () => setAuth(true) }}>
    <BrowserRouter >
      {auth ?
        <>
          <h1>
            <mark>User: Admin<button onClick={() => setAuth(false)}>logout</button></mark></h1>
        </> :
        null
      }
      <Menu routes={ROUTE_CONFIG}></Menu>
      <RouterPage routes={ROUTE_CONFIG} />
    </BrowserRouter>
  </AuthContext.Provider>
}

function RouterPage({ routes, level = 0 }) {
  const { auth } = useContext(AuthContext)
  if (routes?.length) {
    return <>
      <Switch>
        {
          routes.map((item, i) => {
            if (item.root && !level) {
              return <Route path={item.path} exact={!!item.exact} key={i} component={item.component} />
            }
            return <Route path={item.path} exact={!!item.exact} key={i} render={() => {
              return (auth || !item.author) ?
                <>
                  <item.component />
                  <RouterPage routes={item.routes} level={level + 1} />
                </> :
                <Redirect to={{ pathname: '/login', state: { redirect: item.path } }} />
            }} />
          })
        }
      </Switch>
    </>
  }
  return null
}

function Login() {
  const history = useHistory()
  const { login } = useContext(AuthContext)
  return <>
    <button onClick={() => {
      history.push(history.location.state.redirect)
      login()
    }}>login</button>
  </>
}

function Menu({ routes }) {
  return <ul>
    {routes.map((item) => {
      return item.hide ?
        null :
        <React.Fragment key={item.path}>
          <MenuItem {...item} />
        </React.Fragment>
    })}
  </ul>
}

function MenuItem({ path, component, routes, hide }) {
  return hide ?
    null :
    (<li>
      <Link to={path}>{component.name}</Link>
      {routes?.length && <Menu routes={routes}></Menu>}
    </li>)
}

function Home() {
  return <div>{Home.name}</div>
}

function List() {
  return <div>{List.name}</div>
}

function Detail() {
  return <div>{Detail.name}</div>
}

function User() {
  return <div>{User.name}</div>
}

function NotFoundPage() {
  return <h1>404</h1>
}

export default AuthRouterPage