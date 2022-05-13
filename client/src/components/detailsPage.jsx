import React from "react";
import styles from "../styleComponents/detail.module.css";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

export default function DetailsPage() {
  const selector = useSelector((state) => state.details);
  const history = useHistory();

  return (
    <div className={styles.container}>
      <h1>detailsPage</h1>
      <button onClick={() => history.goBack()}>atras</button>
      <div className={styles.containDetail}>
        <div className={styles.targetDetail}>
          <div className={styles.image}>
            <h3>{selector.NameOficial}</h3>
            <img src={selector.Image} alt="bandera" />
          </div>
          <div className={styles.detailInfo}>
            <p>Name: {selector.Name}</p>
            <p>Continent: {selector.Continent}</p>
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
            {selector.TouristActivities?.map((t) => {
              return (
                <div key={t.id}>
                  <p>{t.Name}</p>
                  <p>{t.Difficult}</p>
                  <p>{t.Duration}</p>
                  <p>{t.Season}</p>
                </div>
              );
            })}

            <NavLink exact to={"/countries/creator"}>
              <button>Create tourist activity</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
