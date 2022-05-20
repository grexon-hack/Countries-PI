import React, { useState } from "react";
import styles from "../styleComponents/navBar.module.css";
import Search from "./search";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={styles.contain}>
      <NavLink to={"/"}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/197/992/original/world-png.png"
          alt="logo-mundo"
        />
      </NavLink>
      <div className={styles.search}>
        {pathname === '/countries'?(showSearch ?(
            <>
              <h4
                onClick={() => setShowSearch(false)}
                style={{ cursor: "pointer" }}
              >
                Cancel
              </h4>
              <Search />
            </>
          )
         : (
          <div
            className={styles.searchFalse}
            onClick={() => {
              setShowSearch(true);
            }}
          >
            <h2>Search</h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              ></path>
            </svg>
          </div>
        )):(<h1>Countries-PI</h1>)}
      </div>
      <NavLink to={'/about'} style={{textDecoration: 'none'}}>

      <h4 className={styles.buttonAbout}>About</h4>
      </NavLink>
      {pathname !== "/countries/game" ? (
        <NavLink to={"/countries/game"} style={{textDecoration: 'none'}}>
          <h4 className={styles.buttonNav}>Game</h4>
        </NavLink>
      ) : (
        <NavLink to={"/countries"} style={{textDecoration: 'none'}}>
          <h4 className={styles.buttonNavSalir}>Back</h4>
        </NavLink>
      )}
    </div>
  );
}
