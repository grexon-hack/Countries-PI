import React from "react";
import styles from "../styleComponents/navBar.module.css";
import Search from "./search";
import {NavLink, useLocation} from 'react-router-dom'; 


export default function Navbar() {

  const location = useLocation()
  const { pathname } = location
  
  return (
    <div className={styles.contain}>
     <NavLink to={'/'}>

      <img
        src="https://static.vecteezy.com/system/resources/previews/001/197/992/original/world-png.png"
        alt="logo-mundo"
      />
      </NavLink>
      <div className={styles.search}>
        {pathname === '/countries'?<Search />:<h1>PI-Countries</h1>}
        
      </div>
      <NavLink to={'/countries/game'}>
        <button>Game</button>
      </NavLink>
    </div>
  );
}
