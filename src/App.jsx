import React from "react";
import { Router } from "./router/router";
import { NavBar } from "./components/nav/nav-bar";
import { Footer } from "./components/footer/footer";


export const App = () => (
  <>
    <NavBar />
    <Router />
    <Footer />
  </>
)