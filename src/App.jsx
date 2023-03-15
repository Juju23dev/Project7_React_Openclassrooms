import React from "react";
import { Routes, Route } from "react-router-dom";

const routes = {
  HOME: '/',
  A_PROPOS: '/a-propos',
  LOGEMENT: '/logement/:id',
  NOT_FOUND: '*'
}

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<>home</>} />
      <Route path={routes.A_PROPOS} element={<>a propos</>} />
      <Route path={routes.LOGEMENT} element={<>logement</>} />
      <Route path={routes.NOT_FOUND} element={<>not found</>} />    
    </Routes>
  )
}