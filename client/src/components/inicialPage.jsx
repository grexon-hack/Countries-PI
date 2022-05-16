import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAsyncPost, callApi} from '../redux/action.js';
import { NavLink } from 'react-router-dom';
import styles from '../styleComponents/initial.module.css';

export default function InicialPage(){

    const dispatch = useDispatch()
    const selector = useSelector(state => state.countries)

    useEffect(() => {
        if(selector.length === 0){

            dispatch(callAsyncPost())
        }
    }, [])

    function muestra(){

        dispatch(callApi(1))
    }
    
    return (
        <div className={styles.initialview}>
            <div className={styles.poemWorld}>
                
            </div>
            <div className={styles.borderAlert}>

            <div className={styles.alertInitial}>

            <h1>Countries-PI</h1>
            <NavLink to={'/countries'}>
            <button onClick={() => muestra()}>Start</button>
            </NavLink>
            </div>
            </div>
            
        </div>
    )
}