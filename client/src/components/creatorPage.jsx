import React, { useState } from "react";
import styles from "../styleComponents/form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CreatedActivity } from "../redux/action.js";
import { IsEmpty, Validate } from "./validate.js";
import TargetExit from "./targetExit";

export default function CreatorPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.countries);

  const [marker, setMarker] = useState(false);

  const [ exit, setExit ] = useState(false)

  const [activity, setActivity] = useState({
    Name: "",
    Difficult: 0,
    Duration: "",
    Season: "",
  });

  const [error, setError] = useState({});

  const [ nombres, setNombres] = useState([]);

  const handlerToggle = (e, data) => {
    if (e.target.classList.value === "") {
      setMarker(true);
      e.target.classList = styles.marker;
        setNombres([...nombres, data])
    } else {
      setMarker(false);
      e.target.classList = "";
      setNombres(nombres.filter(d => d !== data))
    }
    
  };
  
  const handlerChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });

    setError(
      Validate({
        ...activity,
        [e.target.name]: e.target.value,
      }),
    );
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(marker)
    if(IsEmpty(activity) && nombres.length) {
        dispatch(CreatedActivity({ ...activity, nombrePais : nombres}));
        setExit(true)
    }
  };

  return (
    <div className={styles.container}>
        {exit&&<TargetExit />}
      <h1>creatorPage</h1>
      <button onClick={() => history.push("/countries")}>atras</button>
      <div className={styles.containerFormulario}>
        <div className={styles.formulario}>
          <form onSubmit={(e) => handlerSubmit(e)}>
            <label> Name: </label>
            <input
              type="text"
              name="Name"
              value={activity.Name}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label> Difficult: </label>
            <input
              type="number"
              name="Difficult"
              value={activity.Difficult}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label> Duration: </label>
            <input
              type="text"
              name="Duration"
              value={activity.Duration}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label> Season: </label>
            <input
              type="text"
              name="Season"
              value={activity.Season}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <button
              disabled={Object.keys(error).length ? true : false}
              type="submit"
            >
              Enviar
            </button>
          </form>
          <ul>
          {
              nombres.length?nombres.map((d, i)=> {
                return (
                    <li key={i}>{d}</li>
                )
              }):''

              
          }
          </ul>
        </div>
        <div className={styles.miniBanderas}>
          {selector.map((data) => {
            return (
              <div className={styles.mini} key={data.ID}>
                <img
                  src={data.Image}
                  alt="mini bandera"
                  onClick={(e) => handlerToggle(e, data.Name)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
