import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { callApi, detailGet } from "../redux/action";
import styles from "../styleComponents/main.module.css";

export default function MainPage() {
  const selector = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const history = useHistory();

  const [paginate, setPaginate] = useState(1);

  useEffect(() => {
    dispatch(callApi(paginate));
  }, [paginate]);
 
  return (
    <div className={styles.containTarget}>
      <h1>mainPage</h1>
      <button onClick={() => history.goBack()}>atras</button>
      <div className={styles.targets}>
        {selector.map((data) => {
          return (
            <div key={data.ID} className={styles.target}>
              <div className={styles.showFirst}>
                <p>{data.NameOficial}</p>
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
      <div>
        <button onClick={() => paginate > 1 && setPaginate(() => paginate - 1)}>
          Previous
        </button>
        <button
          onClick={() => paginate < 25 && setPaginate(() => paginate + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
