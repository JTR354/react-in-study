import React from 'react'
const Portals = React.lazy(() => import('./PortalsDemo'))
export default () => {
  return <>
    <h1>async demo</h1>
    <React.Suspense fallback={<div>Loading ......</div>}>
      <Portals></Portals>
    </React.Suspense>
  </>
}
