import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from '@/presentation/pages/Welcome'
import Home from '@/presentation/pages/Home'

import { RoutesName } from './routesName'
import Projects from '@/presentation/pages/Projects'
import Contact from '@/presentation/pages/Contact'
import About from '@/presentation/pages/About'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesName.Welcome} element={<Welcome />} />
        <Route path={RoutesName.Home} element={<Home />} />
        <Route path={RoutesName.Projects} element={<Projects />} />
        <Route path={RoutesName.Contact} element={<Contact />} />
        <Route path={RoutesName.About} element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router