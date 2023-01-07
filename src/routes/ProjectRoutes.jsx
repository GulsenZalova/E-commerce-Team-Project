import { Layout } from 'antd'
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Catalog from '../pages/Catalog/Catalog'
import Home from '../pages/Home/Home'
import ProjectLayout from '../components/ProjectLayout'

function ProjectRoutes() {
  return (
<>
<Routes>
    <Route path='/' element={<ProjectLayout></ProjectLayout>}>
    <Route index element={<Home></Home>}></Route>
    <Route path='/catalog' element={<Catalog></Catalog>}></Route>
    </Route>
</Routes>
</>
  )
}

export default ProjectRoutes
