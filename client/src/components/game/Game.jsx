import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styleComponents/game.module.css";
import image from '../image/mapita.png';
import desOrden from "./cards";

export default function Game() {
  const selector = useSelector((state) => state.countries);

  const [events, setEvents] = useState([]);
  const [nivel, setNivel] = useState(1);
  const [puntaje, setPuntaje] = useState(0);
  const [corte, setCorte] = useState(3);
  const [oportunity, setOportunity] = useState(3);
  const [array, setArray] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [index, setIndex] = useState(null);
  const [nivelacion, setNivelacion] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [ name, setName ] = useState('');
  const [ estadoJugador, setEstadoJugador ] = useState('')


  useEffect(() => {
   let inicio = prompt('Enter your name');
  setName(inicio)
  },[])

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
      setCorte(corte + 1);
      setOportunity(nivel + 3);
      setNivelacion(0);
      setEstadoJugador(`${name} have advanced to the next level with ${puntaje} points`)
    }
    if (oportunity < 0) {
      setNivel(1);
      setCorte(3);
      setOportunity(3);
      setNivelacion(0);
      setPuntaje(0)
      setGameOver(!gameOver);
      setEstadoJugador(`${name} have lost the Game`);
      
    }
  }, [oportunity, puntaje, nivel]);

  useEffect(() => {
    setTimeout(() => {
      setEstadoJugador('')
    }, 3000);
  },[estadoJugador])

  useEffect(() => {
    events.map((data) => {
      data.className = clase;
    });

    setArray([...desOrden(selector, corte)]);
  }, [nivel, corte, gameOver]);

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
          <div className={styles.containerMemo}>
            {array.map((data, i) => {
              return (
                <div
                  key={i}
                  className={styles.containerImage}
                  style={{
                    width: `calc(1000px  / ${array.length})`,
                    height: `calc(1000px  / ${array.length})`,
                  }}
                >
                  <div className={styles.front} 
                  style={{
                    width: `calc(1000px  / ${array.length})`,
                    height: `calc(1000px  / ${array.length})`,
                  }}
                  >
                    <img
                      src={data.Image}
                      alt="imagen"
                      style={{
                        width: `calc(1000px  / ${array.length})`,
                        height: `calc(1000px  / ${array.length})`,
                      }}
                    />
                  </div>
                  <div
                    className={styles.back}
                    onClick={(e) => handlerClick(e, data.ID, i)}
                    style={{
                      backgroundImage: `url(${image})`,
                      width: `calc(1010px  / ${array.length})`,
                      height: `calc(1010px  / ${array.length})`,
                      top: `calc(-1010px  / ${array.length})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          {
            estadoJugador.length?<h1 className={styles.popop}>{estadoJugador}</h1>:''
          }
          
        </div>
      </div>
    </div>
  );
}
