import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  callApi,
  callApiFilter,
  callApiFilterAct,
  ordenAlpha,
  ordenPopul,
} from "../redux/action";

import styles from "../styleComponents/navBar.module.css";
import { flat } from "./validate";

export default function FilterPage() {
  const dispatch = useDispatch();
  const [view, setView] = useState(false);
  const selector = useSelector((state) => state.countries);

  // con este reducer obtengo los nombre de los continentes sin repeticiones para
  // los filtros...
  const result = selector.reduce((acc, item) => {
    if (!acc.includes(item.Continent)) {
      acc.push(item.Continent);
    }
    return acc;
  }, []);

  return (
    <div className={styles.containFilter}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setView(!view)}
        style={{
          fontSize: "30px",
          cursor: "pointer",
          color: "white",
          border: "solid 1px red",
          borderRadius: "50%",
        }}
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"></path>
      </svg>

      {view && (
        <div className={styles.filtro}>
          <button
            onClick={() => dispatch(callApi())}
            style={{ height: "fit-content" }}
          >
            Clear
          </button>
          <form>
            <p>Continents:</p>
            <select
              name="Continents"
              onChange={(e) =>
                e.target.value !== "Filter" &&
                dispatch(callApiFilter(e.target.value))
              }
              autoFocus
            >
              <option value={null}>Filter</option>
              {result.map((d, i) => {
                return (
                  <option key={i} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          </form>
          <form>
            <p>Activities:</p>
            <select
              name="Activities"
              onChange={(e) =>
                e.target.value !== "Filter" &&
                dispatch(callApiFilterAct(e.target.value))
              }
            >
              <option value={null}>Filter</option>
              {flat(selector).map((d, i) => {
                return (
                  <option key={i} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          </form>
          <form>
            <p>Alphabetic:</p>
            <select
              name="Alphabetic"
              onChange={(e) =>
                e.target.value !== "Filter" &&
                dispatch(ordenAlpha(e.target.value))
              }
            >
              <option value={null}>Filter</option>
              <option value="ASC">[A - Z]</option>
              <option value="DESC">[Z - A]</option>
            </select>
          </form>
          <form>
            <p>Population:</p>
            <select
              name="Population"
              onChange={(e) =>
                e.target.value !== "Filter" &&
                dispatch(ordenPopul(e.target.value))
              }
            >
              <option value={null}>Filter</option>
              <option value="DESC">DESC</option>
              <option value="ASC">ASC</option>
            </select>
          </form>
          <form>
            <p>Area:</p>
            <select
              name="Area"
              onChange={(e) =>
                e.target.value !== "Filter" &&
                dispatch(ordenPopul(e.target.value))
              }
            >
              <option value={null}>Filter</option>
              <option value="DESC">DESC</option>
              <option value="ASC">ASC</option>
            </select>
          </form>
        </div>
      )}
    </div>
  );
}
