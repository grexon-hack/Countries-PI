import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CreatedActivity } from "../redux/action.js";
import {IsEmpty, Validate} from "./validate.js";

export default function CreatorPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.details)
    const { ID } = selector;
    const [activity, setActivity] = useState({
        Name: '',
        Difficult: 0,
        Duration: '',
        Season: ''
    });

    const [ error , setError ] = useState({});

   

    const handlerChange = (e) => {
       setActivity({
           ...activity,
           [e.target.name] : e.target.value
       })

       setError(Validate({
           ...activity,
           [e.target.name] : e.target.value
       }))
       
    }
    
    const handlerSubmit = (e) => {
        e.preventDefault()
        IsEmpty(activity) && dispatch(CreatedActivity({...activity, ID}))
        
    }

    return (
        <div>
            <h1>creatorPage</h1>
            <button onClick={() => history.push('/countries')}>atras</button>
            <form onSubmit={(e) => handlerSubmit(e)}>
                <label> Name: </label>
                <input type="text" name="Name" value={activity.Name} onChange={(e) => handlerChange(e)} style={error.Name?{border : '1px solid red'}:{border:'1px solid'}}/>
                <br />
                <br />
                <label> Difficult: </label>
                <input type="number" name="Difficult" value={activity.Difficult} onChange={(e) => handlerChange(e)}/>
                <br />
                <br />
                <label> Duration: </label>
                <input type="text" name= "Duration" value={activity.Duration} onChange={(e) => handlerChange(e)}/>
                <br /><br />
                <label> Season: </label>
                <input type="text" name="Season" value={activity.Season} onChange={(e) => handlerChange(e)}/>
                <br /><br />
                <button disabled={Object.keys(error).length?true:false} type="submit">Enviar</button>
            </form>
        </div>
    )
}