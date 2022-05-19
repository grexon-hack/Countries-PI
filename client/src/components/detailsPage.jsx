import React, { useEffect, useState } from "react";
import styles from "../styleComponents/detail.module.css";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import {arregloHorario} from './hora.js'

export default function DetailsPage() {
  const selector = useSelector((state) => state.details);
  const history = useHistory();

  const [swith, setSwith] = useState(false);
  const [ hora, setHora ] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setSwith(true);
    }, 1000);
  }, []);

  let hours;
 useEffect(() => {
     if(swith) {
    hours = setTimeout(() => {
        ticktack()
        
      }, 1000);
     } 

 });

 const ticktack = () => {
  setHora(arregloHorario(selector.Name, selector.Timezone))
 }

 useEffect(() => {
  clearTimeout(hours)
 },[])

 
  return (
    <div className={styles.container}>
      <button
      style={{position:'absolute', left : '5px', top:'85px'}}
      onClick={() => history.push("/countries")}>atras</button>
      <div className={styles.containDetail}>
        {swith ? (
          <div className={styles.targetDetail}>
            <div className={styles.image}>
              <div>
              <h3>{selector.NameOficial}</h3>
              <img src={selector.Image} alt="bandera" />
              </div>
              <div className={styles.hour}>

              <p>{hora}</p>
              </div>
            </div>
            <div className={styles.detailInfo}>
              <h1>detailsCountry</h1>
              <br />
              <p>Name: {selector.Name}</p>
              <p>Continent: {selector.Continent}</p>
              <p>Capital: {selector.Capital}</p>
              <p>Subregion: {selector.Subregion}</p>
              <p>TimeZone: {selector.Timezone}</p>
              <p>Population: {selector.Population}</p>
              <p>Geographic Area : {selector.Area}</p>
              <p>Latitude: {selector.Lat}</p>
              <p>Longitude: {selector.Long}</p>
              <p>Cca3: {selector.ID}</p>
              <a href={selector.Maps} rel="opener">
                Map
              </a>
              
            </div>
            <div className={styles.detailActivity}>
              <h2>Activities</h2>
              <div className={styles.containerAct}>
                {selector.TouristActivities?.map((t) => {
                  return (
                    <div key={t.id} className={styles.Activities}>
                      <p>
                        <strong>Name:</strong> {t.Name}
                      </p>
                      <p>
                        <strong>Difficult:</strong> {t.Difficult}
                      </p>
                      <p>
                        <strong>Duration: </strong>
                        {t.Duration}
                      </p>
                      <p>
                        <strong>Season:</strong> {t.Season}
                      </p>
                    </div>
                  );
                })}
              </div>

              <NavLink exact to={"/countries/creator"}>
                <button>Create tourist activity</button>
              </NavLink>
            </div>
          </div>
        ) : (
          <>
            <img
              src="https://reygif.com/media/2/globo-terraqueo-tierra-21343.gif"
              alt="Loading"
            />
            <h1>Loading...</h1>
          </>
        )}
      </div>
    </div>
  );
}
