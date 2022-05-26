import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import image from "./image/myself.jpg";
import styles from "../styleComponents/about.module.css";

export default function About() {
  const selector = useSelector((state) => state.countries);

  const [ show, setShow ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setShow(true)
    }, 1000);
  },[])

  return (
    <div className={styles.containerAbout}>
      {show?
      <>
      <NavLink to={"/countries"}>
        <h3
        className={styles.button}
        >
         Back
        </h3>
      </NavLink>
      <div className={styles.containerBanderitas}>
        {selector.length === 250 &&
          selector.map((data, i) => {
            return (
              <div key={i} className={styles.banderitas}>
                <img src={data.Image} alt={data.Name} />
              </div>
            );
          })}
      </div>

      <div className={styles.aboutMe}>
        <div className={styles.iconos}>
          <div className={styles.bordeImg}>
            <img src={image} alt="myself" />
          </div>
          <div className={styles.reactIcons}>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">  */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{color: 'green'}}
            >
              <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
            </svg>
            {/* </a>  */}
            <a href="https://github.com/grexon-hack" target="_blank" rel="noopener noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{color: 'white'}}
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            </a>

            <a href="mailto:jsarabialugo@gmail.com">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{color: 'brown'}}
            >
              <title></title>
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
            </svg>
            </a>

            <a href="https://www.linkedin.com/in/jose-gregorio-sarabia-lugo-b28791219/" target="_blank" rel="noopener noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{color: 'lightblue'}}
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
            </a>
          </div>
        </div>
        <div className={styles.info}>
          <h1>José Gregorio Sarabia Lugo</h1>
          <p>desarrollador web Full-Stack</p>
          <br />
          <br />
          <p>
            Esta pagina web llamada <strong>Countries-PI </strong> fue puesta
            para mi como un desafio del programa HENRY BOOTCAMP, fue hecha con
            sudor y lagrimas pero por sobre todo, con mucho entusiasmo y empeño,
            implementando todas las tecnologias aprendidas en dicho bootcamp. <br />
            fue creada con:
          </p>
          <br />
          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>Css</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>PostGress</li>
          </ul>
          <br />
          <p>
            Mi nombre se encuentra en el titulo, tengo 31 años, vivo en Colombia
            Medellin estudio analisis y desarrollo de software, voy en el
            5 semestre de ingenieria de sistemas y en ningun lado habia aprendido
            tanto de lo que me gusta como lo he hecho en HENRY estos ultimos 4
            meses, y lo que me falta por aprender.
          </p>
          <br />
          <p>Espero les haya gustado...</p>
        </div>
      </div>
      </>: (
        <>
        <img src="https://reygif.com/media/2/globo-terraqueo-tierra-21343.gif" alt="" />
        <h1>LOADING...</h1>
        </>
      )}
    </div>
  );
}
