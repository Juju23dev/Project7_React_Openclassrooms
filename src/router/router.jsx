import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { NotFount } from "../pages/not-found/not-found";

export const Router = () => (
  <main>
    <Routes>
        <Route path={routes.HOME} element={<>home</>} />
        <Route path={routes.ABOUT_US} element={<>a propos</>} />
        <Route path={routes.LOGEMENT} element={<>logement</>} />
        <Route path={routes.NOT_FOUND} element={<NotFount />} />    
    </Routes>
  </main>
)