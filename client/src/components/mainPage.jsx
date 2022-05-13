import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { detailGet } from "../redux/action";
import styles from "../styleComponents/main.module.css";
import FilterPage from "./filters.jsx";

export default function MainPage() {
  const selector = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  // accion para paginado a nivel local...
  const [paginate, setPaginate] = useState(0);

  const pagenationCountries = () => {
    return selector.slice(paginate, paginate + 10);
  };
  //------------------------------------------

  return (
    <div className={styles.containTarget}>
      {selector.length ? (
        <>
          <div className={styles.filters}>
            <FilterPage />
          </div>
          <div className={styles.targets}>
            {pagenationCountries().map((data) => {
              return (
                <div key={data.ID} className={styles.target}>
                  <div className={styles.showFirst}>
                    <p>{data.Name}</p>
                    <img src={data.Image} alt="bandera" />
                  </div>
                  <div className={styles.showSecond}>
                    <p>{data.Continent}</p>
                    <NavLink to={"/countries/details"}>
                      <button onClick={() => dispatch(detailGet(data.ID))}>
                        Detail
                      </button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.buttonsP}>
            <button
              onClick={() => paginate > 0 && setPaginate(() => paginate - 10)}
            >
              Previous
            </button>
            <button
              onClick={() =>
                paginate < selector.length - 10 &&
                setPaginate(() => paginate + 10)
              }
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
}
