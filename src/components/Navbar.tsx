import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { navbarMenu } from "../data/navbarMenu";
import { Formulario } from "./Formulario";
import { Saludo } from "./Saludo";
import style from "../styles/style.module.css";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <div className={style.mainLayout}>
        <nav className={style.navbar}>
          <NavLink to="/avianca" className={style.NavLink}>
            <h2 className={style.logo}>LOGO </h2>
          </NavLink>
          <ul className={style.navList}>
            {navbarMenu.map((navItem) => (
              <li key={navItem.id} className={style.listItem}>
                <NavLink to={`/${navItem.name}`} className={style.NavLink}>
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.form}>
          <Routes>
            {navbarMenu.map((route) => (
              <Route
                key={route.id}
                path={route.name}
                element={<Saludo name={route.name} />}
              />
            ))}
            <Route
              path="/*"
              element={<Navigate to={`/${navbarMenu[0].name}`} replace />}
            />
          </Routes>
          <Formulario />
        </div>
      </div>
    </BrowserRouter>
  );
};
