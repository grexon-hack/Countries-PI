import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styleComponents/game.module.css";
import image from "../image/mapita.png";
import desOrden from "./cards";

export default function Game() {
  const selector = useSelector((state) => state.countries);

  const [events, setEvents] = useState([]);
  const [nivel, setNivel] = useState(1);
  const [puntaje, setPuntaje] = useState(0);
  const [corte, setCorte] = useState(6);
  const [oportunity, setOportunity] = useState(6);
  const [array, setArray] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [index, setIndex] = useState(null);
  const [nivelacion, setNivelacion] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [name, setName] = useState("");
  const [estadoJugador, setEstadoJugador] = useState("");

  useEffect(() => {
    let inicio = prompt("Enter your name");
    setName(inicio === "" ? "Anonymous" : inicio);
  }, []);

  const clase = "game_back__2lyNE";

  const handlerClick = (e, id, ind) => {
    setEvents([...events, e.target]);
    if (!firstCard) {
      setFirstCard({ evento: e.target, id: id, index: ind });
      setIndex(ind);
    } else if (firstCard && !secondCard) {
      setSecondCard({ evento: e.target, id: id, index: ind });
    }
  };

  useEffect(() => {
    if (firstCard) firstCard.evento.className = "";
    if (secondCard && firstCard) {
      if (firstCard.index !== toString(index)) {
        secondCard.evento.className = "";
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (firstCard && secondCard) {
      const ref1 = firstCard;
      setFirstCard(null);
      const ref2 = secondCard;
      setSecondCard(null);

      if (ref1.id !== ref2.id) {
        setTimeout(() => {
          ref1.evento.className = clase;
          ref2.evento.className = clase;
        }, 300);
        setOportunity(oportunity - 1);
      } else {
        ref1.evento.className = "";
        ref2.evento.className = "";
        setPuntaje(puntaje + 1);
        setNivelacion(nivelacion + 1);
      }
    }
  }, [secondCard]);

  useEffect(() => {
    if (nivelacion === corte && oportunity >= 0) {
      setNivel(nivel + 1);
      setNivelacion(0);
      setOportunity(6);
      setEstadoJugador(
        `${name} have advanced to the next level with ${puntaje} points`,
      );
    }
    if (nivel === 5 || nivel === 10) {
      setCorte(corte + 4);
      setOportunity(nivel + 5);
    }
    if (oportunity < 0) {
      setNivel(1);
      setCorte(6);
      setOportunity(6);
      setNivelacion(0);
      setPuntaje(0);
      setGameOver(!gameOver);
      setEstadoJugador(`${name} have lost the Game`);
    }
  }, [oportunity, puntaje, nivel]);

  useEffect(() => {
    setTimeout(() => {
      setEstadoJugador("");
    }, 3000);
  }, [estadoJugador]);

  useEffect(() => {
    events.map((data) => {
      data.className = clase;
    });

    setArray([...desOrden(selector, corte)]);
  }, [nivel, gameOver]);

  return (
    <div className={styles.container}>
      <div className={styles.tablero}>
        <div className={styles.tableInfo}>
          <div className={styles.infoPlayer}>
            <p>Level: {nivel}</p>
            <p>Points: {puntaje}</p>
            <p>Opportunities: {oportunity}</p>
          </div>
        </div>
        <div className={styles.memo}>
          <h1 className={styles.titulo}>Player: {name}</h1>
          <br />
          <div
            className={styles.containerMemo}
            style={{ width: "700px", height: "400px" }}
          >
            {array.map((data, i) => {
              return (
                <div
                  key={i}
                  className={styles.containerImage}
                  style={{
                    width:
                      corte === 6
                        ? `calc(1700px / (${corte * 2}))`
                        : `calc(2400px / (${corte * 2}))`,
                    height:
                      corte === 6
                        ? `calc(1700px / (${corte * 2}))`
                        : `calc(2400px / (${corte * 2}))`,
                  }}
                >
                  <div
                    className={styles.front}
                    style={{
                      width:
                        corte === 6
                          ? `calc(1700px / (${corte * 2}))`
                          : `calc(2400px / (${corte * 2}))`,
                      height:
                        corte === 6
                          ? `calc(1700px / (${corte * 2}))`
                          : `calc(2400px / (${corte * 2}))`,
                    }}
                  >
                    <img src={data.Image} alt="imagen" />
                  </div>
                  <div
                    className={styles.back}
                    onClick={(e) => handlerClick(e, data.ID, i)}
                    style={{
                      backgroundImage: `url(${image})`,
                      width:
                        corte === 6
                          ? `calc(1700px / (${corte * 2}))`
                          : `calc(2400px / (${corte * 2}))`,
                      height:
                        corte === 6
                          ? `calc(1700px / (${corte * 2}))`
                          : `calc(2400px / (${corte * 2}))`,
                      top:
                        corte === 6
                          ? `calc(-1700px / (${corte * 2}))`
                          : `calc(-2400px / (${corte * 2}))`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          {estadoJugador.length ? (
            <h1 className={styles.popop}>{estadoJugador}</h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
