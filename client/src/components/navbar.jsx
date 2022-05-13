import React from "react";
import styles from "../styleComponents/navBar.module.css";
// import FilterPage from "./filters";
import Search from "./search";

export default function Navbar() {
  
  return (
    <div className={styles.contain}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/197/992/original/world-png.png"
        alt="logo-mundo"
      />
      <div className={styles.search}>
        <Search />
        
      </div>
    </div>
  );
}
