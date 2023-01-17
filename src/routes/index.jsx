import { Layout } from 'antd'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Catalog from '../pages/Catalog'
import Home from '../pages/Home'
import ProjectLayout from '../components/ProjectLayout'
import Details from '../pages/Details'
import Favorites from '../pages/Favorites'

function ProjectRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProjectLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/product/:id' element={<Details />}></Route>
          <Route path='/favorites' element={<Favorites/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default ProjectRoutes
