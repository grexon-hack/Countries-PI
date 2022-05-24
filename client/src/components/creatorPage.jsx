import React, { useEffect, useState } from "react";
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

  // este estado es para marcar y desmarcar las opciones de paises para setearle la actividad
  const [marker, setMarker] = useState(false);

  // para mostrar la targeta con mensaje que su request fue exitoso
  const [exit, setExit] = useState(false);

  // recolector de informacion del formulario
  const [activity, setActivity] = useState({
    Name: "",
    Difficult: 0,
    Duration: "",
    Season1: "",
  });

  // simulacion de loading
  const [loading, setLoading] = useState(true);

  // manejador de errores sobre la informacion del formulario
  const [error, setError] = useState({});

  // recolector de nombres de paises para despachar la actividad a multiples paises
  const [nombres, setNombres] = useState([]);

  // toggle de minimapas
  const handlerToggle = (e, data) => {
    if (e.target.classList.value === "") {
      setMarker(true);
      e.target.classList = styles.marker;
      setNombres([...nombres, data]);
    } else {
      setMarker(false);
      e.target.classList = "";
      setNombres(nombres.filter((d) => d !== data));
    }
  };

  const handlerChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });

    // verifica errores y si hay los envia al state  error
    setError(
      Validate({
        ...activity,
        [e.target.name]: e.target.value,
      }),
    );
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    // este console.log es solo para quitar la advertencia de que no estaba usando marker
    console.log(marker);

    // verifica que todas las propiedades del state activity tengan valor y que state
    // nombres tenga un length mayor que 0, y despacha la informacion.
    if (IsEmpty(activity) && nombres.length) {
      dispatch(CreatedActivity({ ...activity, nombrePais: nombres })).then(
        (data) => {
          if (data.status === 200) setExit(true);
          else alert(data.statusText);
        },
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      {exit && <TargetExit />}
      {loading ? (
        <>
          <img
            src="https://reygif.com/media/2/globo-terraqueo-tierra-21343.gif"
            alt="Loading"
          />
          <h2>Loading...</h2>
        </>
      ) : (
        <>
          
          <button 
          onClick={() => history.push("/countries")}
          style={{position: 'absolute', left: '5px', top: '85px'}}
          >Back</button>
          <div className={styles.containerFormulario}>
            <div className={styles.formulario}>
              <form onSubmit={(e) => handlerSubmit(e)}>
                <p>
                  <strong>Name:</strong>
                </p>
                <input
                  autoComplete="off"
                  type="text"
                  name="Name"
                  value={activity.Name}
                  onChange={(e) => handlerChange(e)}
                />
                <br />
                <span>{error.Name}</span>
                <br />
                
                <p>
                  <strong>Difficult:</strong>
                </p>
                <input
                  autoComplete="off"
                  type="number"
                  name="Difficult"
                  value={activity.Difficult}
                  onChange={(e) => handlerChange(e)}
                />
                <br />
                <span>{error.Difficult}</span>
                <br />
              
                <p>
                  <strong>Duration:</strong>
                </p>
                <input
                  autoComplete="off"
                  type="text"
                  name="Duration"
                  value={activity.Duration}
                  onChange={(e) => handlerChange(e)}
                />
                <br />
                <span>{error.Duration}</span>
                <br />
                
                <p>
                  <strong>Season:</strong>
                </p>
                
                <div className={styles.inputRadio}>
                  <div className={styles.inputs}>
                <label htmlFor="season1">Primavera</label>
                <input type="radio" id="season1" name="Season1" value="Primavera" onChange={(e) => handlerChange(e)}/>
                </div>
                  <div className={styles.inputs}>
                 <label htmlFor="season2">Otoño</label> 
                <input type="radio"  id="season2" name="Season1" value="Otoño" onChange={(e) => handlerChange(e)}/>
                </div>
                  <div className={styles.inputs}>
                 <label htmlFor="season3">Verano</label> 
                <input type="radio"  id="season3" name="Season1" value="Verano" onChange={(e) => handlerChange(e)}/>
                </div>
                  <div className={styles.inputs}>
               <label htmlFor="season4">Invierno</label>   
                <input type="radio" id="season4"  name="Season1" value="Invierno" onChange={(e) => handlerChange(e)}/>
                </div>
                </div>


                <br />
                <span>{error.Season1}</span>
                <br />
                
                <button
                  disabled={Object.keys(error).length ? true : false}
                  type="submit"
                >
                  Send
                </button>
              </form>
              <ul>
                {nombres.length
                  ? nombres.map((d, i) => {
                      return <li key={i}>{d}</li>;
                    })
                  : ""}
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
        </>
      )}
    </div>
  );
}
