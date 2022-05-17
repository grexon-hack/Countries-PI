import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAsyncPost, callApi } from "../redux/action.js";
import { NavLink } from "react-router-dom";
import styles from "../styleComponents/initial.module.css";
import arrayPoemas from "./poemas.js";
import pergamino from "./image/pergamino.png";

export default function InicialPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.countries);
  const [poem, setPoem] = useState(0);
  const [cambio, setCambio] = useState(false);

  useEffect(() => {
    if (selector.length === 0) {
      dispatch(callAsyncPost());
    }
  }, []);

  function muestra() {
    dispatch(callApi(1));
  }
  let swith;
  useEffect(() => {
   swith = setTimeout(() => {
      setCambio(!cambio);
    }, 10000);
  });

  useEffect(() => {
    if (cambio)
      if (poem < 2) setPoem(poem + 1);
      else setPoem(0);
  }, [cambio]);

  return (
    <div className={styles.initialview}>
      <div
        className={styles.poemWorld}
        style={{ backgroundImage: `url(${pergamino})` }}
       
      >
        <div className={styles.versos}>
          <p>{arrayPoemas[poem].poema}</p>
          <br />
          <span>{arrayPoemas[poem].titular}</span>
        </div>
        <div className={styles.botones}>
          {arrayPoemas.map((d, i) => {
            return (
              <span
                key={i}
                style={{ borderBottom: poem === i ? "1px solid" : "none",
                cursor: 'pointer'
                }}
                onClick={() => {
                  setPoem(i);
                  clearTimeout(swith)
                }}
              >
                {i}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.borderAlert}>
        <div className={styles.alertInitial}>
          <h1>Countries-PI</h1>
          <NavLink to={"/countries"}>
            <button onClick={() => muestra()}>Start</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
