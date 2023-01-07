import { Footer, Header } from 'antd/es/layout/layout'
import {Outlet} from 'react-router-dom'
import React from 'react'

function ProjectLayout() {
  return (
<>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
</>
  )
}

export default ProjectLayout
